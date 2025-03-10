"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Zap } from "lucide-react"

export function ShippingForm() {
  return (
    <div className="space-y-6">
      {/* Contact Information */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            placeholder="Enter your first name"
            className="bg-[#0A0A0B] border-white/5"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            placeholder="Enter your last name"
            className="bg-[#0A0A0B] border-white/5"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="bg-[#0A0A0B] border-white/5"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="Enter your phone number"
            className="bg-[#0A0A0B] border-white/5"
          />
        </div>
      </div>

      {/* Address */}
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="address">Address</Label>
          <Input
            id="address"
            placeholder="Enter your street address"
            className="bg-[#0A0A0B] border-white/5"
          />
        </div>
        
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="city">City</Label>
            <Input
              id="city"
              placeholder="Enter your city"
              className="bg-[#0A0A0B] border-white/5"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="country">Country</Label>
            <Select defaultValue="us">
              <SelectTrigger className="bg-[#0A0A0B] border-white/5">
                <SelectValue placeholder="Select your country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="ca">Canada</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="state">State</Label>
            <Select>
              <SelectTrigger className="bg-[#0A0A0B] border-white/5">
                <SelectValue placeholder="Select your state" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ny">New York</SelectItem>
                <SelectItem value="ca">California</SelectItem>
                <SelectItem value="tx">Texas</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="zip">ZIP Code</Label>
            <Input
              id="zip"
              placeholder="Enter your ZIP code"
              className="bg-[#0A0A0B] border-white/5"
            />
          </div>
        </div>
      </div>

      {/* Shipping Method */}
      <div className="space-y-4">
        <Label>Shipping Method</Label>
        <RadioGroup defaultValue="standard" className="space-y-2">
          <label className="flex items-center justify-between p-4 rounded-lg border border-white/5 hover:border-white/20 transition-colors cursor-pointer">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="standard" />
              <div>
                <div className="font-medium">Standard Shipping</div>
                <div className="text-sm text-gray-400">5-7 business days</div>
              </div>
            </div>
            <span className="font-medium">$9.99</span>
          </label>
          
          <label className="flex items-center justify-between p-4 rounded-lg border border-white/5 hover:border-white/20 transition-colors cursor-pointer">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="express" />
              <div>
                <div className="font-medium">Express Shipping</div>
                <div className="text-sm text-gray-400">2-3 business days</div>
              </div>
            </div>
            <span className="font-medium">$19.99</span>
          </label>
          
          <label className="flex items-center justify-between p-4 rounded-lg border border-white/5 hover:border-white/20 transition-colors cursor-pointer">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="crypto" />
              <div className="flex items-center gap-2">
                <div>
                  <div className="font-medium">Crypto-Boosted Shipping</div>
                  <div className="text-sm text-gray-400">Same-day delivery</div>
                </div>
                <span className="text-xs bg-violet-500/20 text-violet-400 px-2 py-1 rounded-full">FASTEST</span>
              </div>
            </div>
            <span className="font-medium">$29.99</span>
          </label>
        </RadioGroup>
      </div>
    </div>
  )
}