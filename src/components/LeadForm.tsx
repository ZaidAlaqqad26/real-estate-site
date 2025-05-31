import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { formatPhoneNumber } from '../lib/utils';

interface FormData {
  name: string;
  phone: string;
  email: string;
  address: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  address?: string;
}

interface LeadFormProps {
  title?: string;
  subtitle?: string;
  compact?: boolean;
}

const LeadForm: React.FC<LeadFormProps> = ({ 
  title = "Get Your Cash Offer",
  subtitle = "Fill out the form below to get a fair cash offer within 24 hours.",
  compact = false
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (formData.phone.replace(/[^0-9]/g, '').length !== 10) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }
    
    if (formData.email && !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.address.trim()) {
      newErrors.address = "Property address is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      setFormData({ ...formData, [name]: formatPhoneNumber(value) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
    
    // Clear error when field is edited
    if (errors[name as keyof FormErrors]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        
        // Reset form after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: "",
            phone: "",
            email: "",
            address: "",
            message: "",
          });
        }, 5000);
      }, 1500);
    }
  };

  const formVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    }
  };

  const successVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 15 }
    }
  };

  return (
    <Card className={`shadow-xl border-0 ${compact ? '' : 'md:p-2'}`}>
      <CardContent className={`${compact ? 'p-4 md:p-6' : 'p-6 md:p-8'}`}>
        {!isSubmitted ? (
          <>
            {(title || subtitle) && (
              <div className={`text-center mb-6 ${compact ? 'mb-4' : 'mb-8'}`}>
                {title && <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-500">{title}</h3>}
                {subtitle && <p className="mt-2 text-gray-600 dark:text-gray-400">{subtitle}</p>}
              </div>
            )}
            
            <motion.form 
              onSubmit={handleSubmit} 
              className="space-y-4"
              variants={formVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants}>
                <Input
                  name="name"
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  error={errors.name}
                  required
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Input
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  error={errors.phone}
                  required
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Input
                  name="email"
                  type="email"
                  placeholder="Email Address (optional)"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Input
                  name="address"
                  placeholder="Property Address"
                  value={formData.address}
                  onChange={handleChange}
                  error={errors.address}
                  required
                />
              </motion.div>
              
              {!compact && (
                <motion.div variants={itemVariants}>
                  <textarea
                    name="message"
                    placeholder="Any additional details about your property (optional)"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="flex w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-base transition-colors
                      focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent
                      placeholder:text-gray-500 dark:placeholder:text-gray-400
                      dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                  />
                </motion.div>
              )}
              
              <motion.div variants={itemVariants}>
                <Button 
                  type="submit" 
                  variant="accent" 
                  size="xl" 
                  fullWidth={true}
                  className="mt-2 font-semibold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Processing..." : "Get My Cash Offer"}
                </Button>
              </motion.div>
              
              <motion.p 
                className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4"
                variants={itemVariants}
              >
                We respect your privacy. Your information will not be shared.
              </motion.p>
            </motion.form>
          </>
        ) : (
          <motion.div 
            className="text-center py-8"
            variants={successVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Thank You!</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              We've received your information and will contact you shortly with your cash offer.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              Check your phone for a text confirmation.
            </p>
          </motion.div>
        )}
      </CardContent>
    </Card>
  );
};

export default LeadForm;