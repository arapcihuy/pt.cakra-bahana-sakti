"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { useTranslation } from "react-i18next"
import { useContext } from "react"
import { CartContext } from "./cart-sidebar"
import { Check, CreditCard, Truck, MapPin, Phone, Mail, User } from "lucide-react"

type CheckoutFormData = {
  fullName: string
  email: string
  phone: string
  address: string
  city: string
  postalCode: string
  deliveryMethod: string
  paymentMethod: string
  notes: string
  agreeToTerms: boolean
}

export function CheckoutModal({ 
  isOpen, 
  onClose 
}: { 
  isOpen: boolean
  onClose: () => void 
}) {
  const { t } = useTranslation()
  const { cart } = useContext(CartContext)
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<CheckoutFormData>(() => {
    // Load saved form data from localStorage
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('checkout-form-data')
      if (saved) {
        try {
          return JSON.parse(saved)
        } catch (e) {
          console.error('Error parsing saved form data:', e)
        }
      }
    }
    return {
      fullName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      postalCode: "",
      deliveryMethod: "",
      paymentMethod: "",
      notes: "",
      agreeToTerms: false
    }
  })

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0)
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0)

  const handleInputChange = (field: keyof CheckoutFormData, value: string | boolean) => {
    const newFormData = { ...formData, [field]: value }
    setFormData(newFormData)
    
    // Save to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('checkout-form-data', JSON.stringify(newFormData))
    }
  }

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleCancel = () => {
    // Clear saved form data when canceling
    if (typeof window !== 'undefined') {
      localStorage.removeItem('checkout-form-data')
    }
    setCurrentStep(1)
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      postalCode: "",
      deliveryMethod: "",
      paymentMethod: "",
      notes: "",
      agreeToTerms: false
    })
    onClose()
  }

  const handleSubmit = () => {
    // Here you would typically send the order to your backend
    console.log("Order submitted:", { formData, cart, totalPrice })
    
    // Show success message
    const successMessage = `Order submitted successfully!
    
Order Details:
- Total Items: ${totalItems}
- Total Amount: Rp${(totalPrice + (formData.deliveryMethod === "express" ? 50000 : 25000)).toLocaleString("id-ID")}
- Order ID: #${Math.random().toString(36).substr(2, 9).toUpperCase()}

We'll contact you soon at ${formData.email} or ${formData.phone} to confirm your order.`
    
    alert(successMessage)
    onClose()
    setCurrentStep(1)
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      postalCode: "",
      deliveryMethod: "",
      paymentMethod: "",
      notes: "",
      agreeToTerms: false
    })
    
    // Clear saved form data
    if (typeof window !== 'undefined') {
      localStorage.removeItem('checkout-form-data')
    }
  }

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validatePhone = (phone: string) => {
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/
    return phoneRegex.test(phone)
  }

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.fullName && 
               formData.email && 
               validateEmail(formData.email) &&
               formData.phone && 
               validatePhone(formData.phone) &&
               formData.address && 
               formData.city
      case 2:
        return formData.deliveryMethod && formData.paymentMethod
      case 3:
        return formData.agreeToTerms
      default:
        return false
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Checkout - Step {currentStep} of 3
          </DialogTitle>
        </DialogHeader>

        {/* Progress Bar */}
        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center space-x-4">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step <= currentStep 
                    ? "bg-blue-600 text-white" 
                    : "bg-gray-200 text-gray-600"
                }`}>
                  {step < currentStep ? <Check className="w-4 h-4" /> : step}
                </div>
                {step < 3 && (
                  <div className={`w-16 h-1 mx-2 ${
                    step < currentStep ? "bg-blue-600" : "bg-gray-200"
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Form */}
          <div className="lg:col-span-2">
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-lg font-semibold mb-4">
                  <User className="w-5 h-5" />
                  Customer Information
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange("fullName", e.target.value)}
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="Enter your email"
                      className={formData.email && !validateEmail(formData.email) ? "border-red-500" : ""}
                    />
                    {formData.email && !validateEmail(formData.email) && (
                      <p className="text-red-500 text-xs mt-1">Please enter a valid email address</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="Enter your phone number"
                      className={formData.phone && !validatePhone(formData.phone) ? "border-red-500" : ""}
                    />
                    {formData.phone && !validatePhone(formData.phone) && (
                      <p className="text-red-500 text-xs mt-1">Please enter a valid phone number</p>
                    )}
                  </div>
                </div>

                <div>
                  <Label htmlFor="address">Address *</Label>
                  <Textarea
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    placeholder="Enter your complete address"
                    rows={3}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      value={formData.city}
                      onChange={(e) => handleInputChange("city", e.target.value)}
                      placeholder="Enter your city"
                    />
                  </div>
                  <div>
                    <Label htmlFor="postalCode">Postal Code</Label>
                    <Input
                      id="postalCode"
                      value={formData.postalCode}
                      onChange={(e) => handleInputChange("postalCode", e.target.value)}
                      placeholder="Enter postal code"
                    />
                  </div>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-lg font-semibold mb-4">
                  <Truck className="w-5 h-5" />
                  Delivery & Payment
                </div>

                <div>
                  <Label htmlFor="deliveryMethod">Delivery Method *</Label>
                  <Select value={formData.deliveryMethod} onValueChange={(value) => handleInputChange("deliveryMethod", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select delivery method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pickup">Pickup at Store</SelectItem>
                      <SelectItem value="delivery">Home Delivery</SelectItem>
                      <SelectItem value="express">Express Delivery</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="paymentMethod">Payment Method *</Label>
                  <Select value={formData.paymentMethod} onValueChange={(value) => handleInputChange("paymentMethod", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select payment method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bank_transfer">Bank Transfer</SelectItem>
                      <SelectItem value="cash">Cash on Delivery</SelectItem>
                      <SelectItem value="credit_card">Credit Card</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="notes">Additional Notes</Label>
                  <Textarea
                    id="notes"
                    value={formData.notes}
                    onChange={(e) => handleInputChange("notes", e.target.value)}
                    placeholder="Any special instructions or notes..."
                    rows={3}
                  />
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-lg font-semibold mb-4">
                  <Check className="w-5 h-5" />
                  Order Review
                </div>

                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Customer Information</h4>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p><strong>Name:</strong> {formData.fullName}</p>
                      <p><strong>Email:</strong> {formData.email}</p>
                      <p><strong>Phone:</strong> {formData.phone}</p>
                      <p><strong>Address:</strong> {formData.address}</p>
                      <p><strong>City:</strong> {formData.city}</p>
                      {formData.postalCode && <p><strong>Postal Code:</strong> {formData.postalCode}</p>}
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Delivery & Payment</h4>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p><strong>Delivery:</strong> {formData.deliveryMethod}</p>
                      <p><strong>Payment:</strong> {formData.paymentMethod}</p>
                      {formData.notes && <p><strong>Notes:</strong> {formData.notes}</p>}
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
                    />
                    <Label htmlFor="agreeToTerms" className="text-sm">
                      I agree to the terms and conditions *
                    </Label>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="border rounded-lg p-4 sticky top-4">
              <h3 className="font-semibold text-lg mb-4">Order Summary</h3>
              
              <div className="space-y-3 mb-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between items-center text-sm">
                    <div className="flex-1">
                      <p className="font-medium">{item.name}</p>
                      <p className="text-gray-500">Qty: {item.qty}</p>
                    </div>
                    <p className="font-semibold">Rp{(item.price * item.qty).toLocaleString("id-ID")}</p>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>Rp{totalPrice.toLocaleString("id-ID")}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery:</span>
                  <span>Rp{formData.deliveryMethod === "express" ? "50,000" : "25,000"}</span>
                </div>
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total:</span>
                  <span>Rp{(totalPrice + (formData.deliveryMethod === "express" ? 50000 : 25000)).toLocaleString("id-ID")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between pt-6 border-t">
          <Button
            variant="outline"
            onClick={handleBack}
            disabled={currentStep === 1}
          >
            Back
          </Button>
          
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleCancel}>
              Cancel
            </Button>
            {currentStep < 3 ? (
              <Button onClick={handleNext} disabled={!canProceed()}>
                Next
              </Button>
            ) : (
              <Button onClick={handleSubmit} disabled={!canProceed()}>
                Place Order
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
} 