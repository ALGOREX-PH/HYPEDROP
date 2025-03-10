"use client"

import { motion } from "framer-motion"
import { Package, Clock, AlertTriangle, RefreshCw } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const returnPolicies = [
  {
    icon: Package,
    title: "Eligibility for Returns",
    content: "Items must be unused and in original packaging. Return requests must be made within 30 days of delivery."
  },
  {
    icon: RefreshCw,
    title: "Refund Process",
    content: "Simple 3-step process: Request return, ship item back, receive refund within 5-7 business days."
  },
  {
    icon: AlertTriangle,
    title: "Non-refundable Items",
    content: "Digital items, customized products, and items marked as final sale are not eligible for returns."
  },
  {
    icon: Clock,
    title: "Processing Time",
    content: "Returns are processed within 48 hours of receipt. Refunds typically appear in 5-8 business days."
  }
]

export function ReturnPolicy() {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">Return & Refund Policy</h2>
        <p className="text-gray-400">
          Our commitment to customer satisfaction with clear and fair return policies
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {returnPolicies.map((policy, i) => (
          <motion.div
            key={policy.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
          >
            <div className="flex items-center gap-4 mb-4">
              <policy.icon className="w-8 h-8 text-blue-400" />
              <h3 className="text-lg font-bold">{policy.title}</h3>
            </div>
            <p className="text-gray-400">{policy.content}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-12"
      >
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="border-white/10">
            <AccordionTrigger className="text-left">
              How do I initiate a return?
            </AccordionTrigger>
            <AccordionContent className="text-gray-400">
              Log into your account, go to order history, select the item you want to return,
              and follow the prompts to generate a return shipping label.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border-white/10">
            <AccordionTrigger className="text-left">
              What condition should returned items be in?
            </AccordionTrigger>
            <AccordionContent className="text-gray-400">
              Items must be unworn, unwashed, and in their original packaging with all tags attached.
              Any signs of wear or damage may result in the return being rejected.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </motion.div>
    </section>
  )
}