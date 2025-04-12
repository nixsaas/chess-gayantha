import Link from "next/link"
import Header from "@/components/header"
import Image from "next/image"
import {Button} from "@/components/ui/button"
import JoinButton from "@/components/join-button"


export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground dark:bg-secondary dark:text-white">
      <Header />

      {/* Hero Section */}
      <section id="home" className="hero-section min-h-screen flex items-center pt-16">
        <div className="container mx-auto px-4 w-full">
          <div className="max-w-2xl text-white py-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Castle Wizard Chess Academy</h1>
            <p className="text-xl mb-8">
              Transform your game with personalized instruction from our team of chess masters. Strategic thinking for
              all ages and skill levels.
            </p>
            <div className="flex flex-wrap gap-4">
                <JoinButton />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 about-pattern ">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <Image
                src="../public/pexels-cottonbro-8427602.jpg"
                alt="Chess Tutor"
                width={600}
                height={600}
                className="rounded-lg shadow-xl object-cover object-top w-full max-w-md mx-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">About Your Tutor</h2>
              <h3 className="text-xl font-semibold mb-4">International Master Alexander Castle</h3>
              <p className="mb-4">
                With over 15 years of competitive experience and 10 years of teaching, I've helped hundreds of students
                improve their chess skills and achieve their goals.
              </p>
              <p className="mb-4">
                My teaching philosophy centers on understanding each student's unique learning style and tailoring
                instruction to maximize their potential. I believe chess is not just a game but a powerful tool for
                developing critical thinking, patience, and strategic planning.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-card p-4 rounded shadow dark:bg-secondary/80">
                  <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full mb-3">
                    <i className="ri-trophy-line ri-lg text-primary"></i>
                  </div>
                  <h4 className="font-semibold mb-1">FIDE Rating</h4>
                  <p>2450</p>
                </div>
                <div className="bg-card p-4 rounded shadow dark:bg-secondary/80">
                  <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full mb-3">
                    <i className="ri-user-star-line ri-lg text-primary"></i>
                  </div>
                  <h4 className="font-semibold mb-1">Students Coached</h4>
                  <p>500+</p>
                </div>
                <div className="bg-card p-4 rounded shadow dark:bg-secondary/80">
                  <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full mb-3">
                    <i className="ri-medal-line ri-lg text-primary"></i>
                  </div>
                  <h4 className="font-semibold mb-1">Tournament Wins</h4>
                  <p>25+</p>
                </div>
                <div className="bg-card p-4 rounded shadow dark:bg-secondary/80">
                  <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full mb-3">
                    <i className="ri-book-open-line ri-lg text-primary"></i>
                  </div>
                  <h4 className="font-semibold mb-1">Teaching Experience</h4>
                  <p>10 Years</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section id="classes" className="py-20 bg-muted dark:bg-secondary/50 chess-pattern">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Chess Classes</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground dark:text-gray-300">
              Choose from a variety of class formats designed to meet your specific needs and goals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Beginner Class */}
            <div className="class-card bg-card dark:bg-secondary/80 rounded-lg shadow-lg overflow-hidden">
              <div
                style={{
                  backgroundImage: "url('https://public.readdy.ai/ai/img_res/41fcb1604d2e2a1b267fbe6b6af3fe93.jpg')",
                }}
                className="h-48 bg-cover bg-center"
              ></div>
              <div className="p-6">
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full mb-4">
                  <i className="ri-seedling-line ri-lg text-primary"></i>
                </div>
                <h3 className="text-xl font-bold mb-2">Beginner Group Classes</h3>
                <p className="text-muted-foreground dark:text-gray-300 mb-4">
                  Perfect for newcomers to chess. Learn the rules, basic tactics, and fundamental principles in a
                  supportive environment.
                </p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-bold text-primary">$25 / session</span>
                  <span className="text-sm text-muted-foreground dark:text-gray-400">90 minutes</span>
                </div>
                <Button className="w-full bg-primary text-white py-2 font-semibold rounded-button hover:bg-opacity-90 transition whitespace-nowrap">
                  Learn More
                </Button>
              </div>
            </div>
            {/* Intermediate Class */}
            <div className="class-card bg-card dark:bg-secondary/80 rounded-lg shadow-lg overflow-hidden">
              <div
                style={{
                  backgroundImage: "url('https://public.readdy.ai/ai/img_res/072c33f66b431d86d7f33472ea13b15b.jpg')",
                }}
                className="h-48 bg-cover bg-center"
              ></div>
              <div className="p-6">
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full mb-4">
                  <i className="ri-chess-line ri-lg text-primary"></i>
                </div>
                <h3 className="text-xl font-bold mb-2">Intermediate Group Classes</h3>
                <p className="text-muted-foreground dark:text-gray-300 mb-4">
                  Deepen your understanding of strategy, tactics, and positional play. Ideal for players with some
                  experience.
                </p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-bold text-primary">$35 / session</span>
                  <span className="text-sm text-muted-foreground dark:text-gray-400">2 hours</span>
                </div>
                <Button className="w-full bg-primary text-white py-2 font-semibold rounded-button hover:bg-opacity-90 transition whitespace-nowrap">
                  Learn More
                </Button>
              </div>
            </div>
            {/* Advanced Class */}
            <div className="class-card bg-card dark:bg-secondary/80 rounded-lg shadow-lg overflow-hidden">
              <div
                style={{
                  backgroundImage: "url('https://public.readdy.ai/ai/img_res/30a37a5c5d656eea1580742b1b0357db.jpg')",
                }}
                className="h-48 bg-cover bg-center"
              ></div>
              <div className="p-6">
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full mb-4">
                  <i className="ri-vip-crown-line ri-lg text-primary"></i>
                </div>
                <h3 className="text-xl font-bold mb-2">Advanced Group Classes</h3>
                <p className="text-muted-foreground dark:text-gray-300 mb-4">
                  Master complex strategies, opening theory, and endgame techniques. For serious players looking to
                  compete at higher levels.
                </p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-bold text-primary">$45 / session</span>
                  <span className="text-sm text-muted-foreground dark:text-gray-400">2.5 hours</span>
                </div>
                <Button className="w-full bg-primary text-white py-2 font-semibold rounded-button hover:bg-opacity-90 transition whitespace-nowrap">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Link href="#" className="flex items-center mb-4">
                <Image
                  src="https://static.readdy.ai/image/067a02bce33b6b27de94410c4a168271/90dfca2c66b9476bf081c286db74e7d2.jpeg"
                  alt="CWCA Logo"
                  width={48}
                  height={48}
                  className="h-12 w-auto"
                />
              </Link>
              <p className="text-gray-400 mb-6">
                Elevating chess skills through expert instruction and a supportive community.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <i className="ri-facebook-fill"></i>
                  </div>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <i className="ri-instagram-line"></i>
                  </div>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <i className="ri-twitter-x-line"></i>
                  </div>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <i className="ri-youtube-line"></i>
                  </div>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#home" className="text-gray-400 hover:text-white transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-gray-400 hover:text-white transition">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#classes" className="text-gray-400 hover:text-white transition">
                    Classes
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="text-gray-400 hover:text-white transition">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-gray-400 hover:text-white transition">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="w-5 h-5 flex items-center justify-center mr-2 mt-1">
                    <i className="ri-map-pin-line text-gray-400"></i>
                  </div>
                  <span className="text-gray-400">123 Chess Street, New York, NY 10001</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 flex items-center justify-center mr-2 mt-1">
                    <i className="ri-mail-line text-gray-400"></i>
                  </div>
                  <span className="text-gray-400">info@castlewizard.academy</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 flex items-center justify-center mr-2 mt-1">
                    <i className="ri-phone-line text-gray-400"></i>
                  </div>
                  <span className="text-gray-400">(212) 555-1234</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">Subscribe to receive chess tips and class updates.</p>
              <form>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="px-4 py-2 w-full border-none rounded-l focus:outline-none text-gray-800"
                  />
                  <Button className="bg-primary px-4 py-2 rounded-r-button whitespace-nowrap">Subscribe</Button>
                </div>
              </form>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Castle Wizard Chess Academy. All rights reserved.</p>
          </div>
          <div className=" mt-12 pt-8 text-center text-gray-400">
            <p>.Powerd by NYX </p>
          </div>
        </div>
      </footer>
    </main>
  )
}





