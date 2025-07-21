export type UserRole =
  | "student"
  | "instructor"
  | "employee"
  | "businessInstructor"
  | "companysAdmin"
  | "superAdmin" | "";
  
  export interface User {
    userRole: string;
  }

export type InviteType = "individual" | "group";

export interface CourseDataTypes {
  title: string;
  category: string;
  duration: string;
  progress: number;
}

export interface ExperienceTypes {
  role: string;
  company: string;
  duration: string;
  location: string;
  description: string;
  projects: string[];
}

export interface EductionTypes {
  courseName: string;
  institution: string;
  duration: string;
  location: string;
  gpa: number;
}

export interface CertificationTypes {
  role: string;
  company: string;
  duration: string;
  location: string;
  credentialId: string;
}

export interface QuizTypes {
  quizName: string;
  totalQuestion: number;
  corrected: number;
  date: string;
  duration: string;
  attendance: number;
  answeringStatus: "not answered" | "answered";
  percentage?: number;
}

export interface StateTypes {
  title: string;
  mainText: string;
  subText: string;
  percentage?: number;
}

export interface QuizInGradeTypes {
  quizName: string;
  instructorName: string;
  totalQuestion: number;
  percentage: number;
  date: string;
  answeringStatus: string;
  grade: string;
}

export interface CertificateTypes {
  certificateName: string;
  instructorName: string;
  date: string;
  courseProgress?: number;
}

export interface CourseTypes {
  _id: string;
  courseName: string;
  courseThumnail: string;
  instructor?: string;
  category?: string;
  lectures: number;
  duration: string;
  enrolled: number;
  status: string;
  completedPercentage?: number;
  rating?: number;
  amount: number;
}

export interface InstructorQuizTypes {
  quizName: string;
  date: string;
  duration: string;
  totalQuestion: number;
}

export interface StudentTypes {
  _id?: string;
  studentName?: string;
  name?: string;
  email?: string;
  image?: string;
  address?: string;
  department?: string;
  progress?: number;
  enrolledCourses?: number;
  completed?: number;
  courseName?: string;
  active?: string;
  enrolledDate?: string;
  status?: string;
}

export interface WithdrawTypes {
  id: string;
  amount: number;
  paymentMethod: string;
  date: string;
  status: string;
}

export interface ShopTypes {
  _id: string;
  thumbnail: string;
  title: string;
  description: string;
  productManager: string;
  price: number;
  status?: string;
  author?: string;
  category?: string;
  sales?: number;
  rating?: number;
}

export interface SidebarLink {
  name: string;
  url: string;
  icon: string;
}

export interface StudentTabTypes {
  name: string;
  count: number;
}

export interface Activity {
  id: number;
  title: string;
  student: string;
  time: string;
}

export interface BundleCourseTypes {
  _id: string;
  bundleName: string;
  description: string;
  includedCourses: string[];
  price: number;
  status: "active" | "inactive";
}

export interface EventWebinarTypes {
  title: string;
  description: string;
  date: string;
  time: string;
  people: number;
  conferenceTool: string;
}

export interface SpeakerTypes {
  name: string;
  designation: string;
  thumbnail: string;
}
export interface EventScheduleTypes {
  name: string;
  date: string;
  thumbnail: string;
}

export interface InstructorTypes {
  instructorName: string;
  email: string;
  image: string;
  specialization: string;
  courses: number;
  students: number;
  rating: number;
  earning: number;
  status: string;
}

export interface EventTypes {
  eventName: string;
  type: string;
  date: string;
  address: string;
  organizer: string;
  attendance: number;
  price: number;
  status: string;
}

export interface BusinessTypes {
  businessName: string;
  email: string;
  image: string;
  plan: string;
  employees: number;
  activeCourses: number;
  totalSpent: number;
  status: string;
}

export interface ConferenceTypes {
  conferenceTool: string;
  description: string;
  status: "completed" | "incomplete";
}
