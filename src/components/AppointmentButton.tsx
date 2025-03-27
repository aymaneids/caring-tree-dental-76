
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { CalendarIcon, Phone } from 'lucide-react';
import { toast } from 'sonner';

interface AppointmentButtonProps {
  className?: string;
  variant?: 'default' | 'outline' | 'secondary';
  size?: 'default' | 'sm' | 'lg';
  fullWidth?: boolean;
}

export const AppointmentButton = ({ 
  className, 
  variant = 'default',
  size = 'default',
  fullWidth = false
}: AppointmentButtonProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    appointmentType: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string, name: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send this data to a server
    console.log('Appointment request submitted:', formData);
    toast.success('Appointment request received! We will contact you shortly to confirm.', {
      duration: 5000,
    });
    setIsDialogOpen(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      appointmentType: '',
      preferredDate: '',
      preferredTime: '',
      message: '',
    });
  };

  return (
    <>
      <Button 
        onClick={() => setIsDialogOpen(true)}
        variant={variant} 
        size={size}
        className={cn(
          'gap-2 font-medium',
          variant === 'default' && 'bg-dental-500 hover:bg-dental-600 text-white',
          fullWidth && 'w-full',
          className
        )}
      >
        <CalendarIcon className="h-4 w-4" />
        Schedule Appointment
      </Button>
      
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[500px] p-6 rounded-xl animate-scale-in">
          <DialogHeader>
            <DialogTitle className="text-2xl font-heading text-dental-800">Schedule Your Appointment</DialogTitle>
            <DialogDescription className="text-gray-600">
              Fill out this form and we'll contact you to confirm your appointment time.
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                placeholder="John Smith" 
                required 
                className="border-dental-200 focus:border-dental-400 focus:ring-dental-400"
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input 
                  id="phone" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  placeholder="(555) 555-5555" 
                  required
                  className="border-dental-200 focus:border-dental-400 focus:ring-dental-400"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  placeholder="john@example.com" 
                  required
                  className="border-dental-200 focus:border-dental-400 focus:ring-dental-400"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="appointmentType">Appointment Type</Label>
              <Select 
                value={formData.appointmentType} 
                onValueChange={(value) => handleSelectChange(value, 'appointmentType')}
              >
                <SelectTrigger className="border-dental-200 focus:border-dental-400 focus:ring-dental-400">
                  <SelectValue placeholder="Select appointment type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cleaning">Cleaning & Check-up</SelectItem>
                  <SelectItem value="newPatient">New Patient Exam</SelectItem>
                  <SelectItem value="consultation">Consultation</SelectItem>
                  <SelectItem value="emergency">Dental Emergency</SelectItem>
                  <SelectItem value="cosmetic">Cosmetic Consultation</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="preferredDate">Preferred Date</Label>
                <Input 
                  id="preferredDate" 
                  name="preferredDate" 
                  type="date" 
                  value={formData.preferredDate} 
                  onChange={handleChange} 
                  required
                  className="border-dental-200 focus:border-dental-400 focus:ring-dental-400"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="preferredTime">Preferred Time</Label>
                <Select 
                  value={formData.preferredTime} 
                  onValueChange={(value) => handleSelectChange(value, 'preferredTime')}
                >
                  <SelectTrigger className="border-dental-200 focus:border-dental-400 focus:ring-dental-400">
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="morning">Morning (8am-11am)</SelectItem>
                    <SelectItem value="afternoon">Afternoon (12pm-3pm)</SelectItem>
                    <SelectItem value="evening">Evening (3pm-5pm)</SelectItem>
                    <SelectItem value="any">Any Available Time</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message">Additional Information</Label>
              <Textarea 
                id="message" 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                placeholder="Please share any specific concerns or questions you have."
                className="min-h-[80px] border-dental-200 focus:border-dental-400 focus:ring-dental-400"
              />
            </div>
            
            <DialogFooter className="mt-6 gap-2">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setIsDialogOpen(false)}
                className="border-dental-300 text-dental-700 hover:bg-dental-50"
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                className="bg-dental-500 hover:bg-dental-600 gap-2"
              >
                <Phone className="h-4 w-4" />
                Request Appointment
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AppointmentButton;
