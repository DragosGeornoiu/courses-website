export enum SelectedPage {
    Home = "home",
    Benefits = "benefits",
    OurClasses = "ourclasses",
    Enroll = "enroll",
    ContactUs = "contactus"
  }
 
export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ScheduledClass {
  startDate: string;      // Format: "YYYY-MM-DD"
  startTime: string;      // Format: "HH:mm"
  endTime: string;        // Format: "HH:mm"
  frequency: string;      // e.g., "weekly", "monthly", etc.
  dayOfWeek: string;     // e.g., "Sunday", "Monday", etc. (for weekly frequency)
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
  price?: string;
  ageInterval?: string;
  scheduledClasses?: ScheduledClass[];
}