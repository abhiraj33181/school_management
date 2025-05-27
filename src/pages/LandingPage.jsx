import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaGraduationCap, FaChalkboardTeacher, FaUsers, FaLaptopCode, FaChartLine, FaPalette, FaCloud, FaCode, FaAward, FaBook, FaGlobe, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('Home');
  const aboutRef = useRef(null);
  const coursesRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleNavClick = (name, href) => {
    setActiveNav(name);
    if (href === '#about') {
      scrollToSection(aboutRef);
    } else if (href === '#features') {
      scrollToSection(coursesRef);
    } else if (href === '#contact') {
      scrollToSection(contactRef);
    }
  };

  const features = [
    {
      title: "100+ Courses",
      description: "Explore a variety of new subjects",
      icon: <FaGraduationCap className="w-8 h-8" />,
      gradient: "from-blue-500 to-blue-600"
    },
    {
      title: "Experts Instruction",
      description: "Certified & experienced instructor",
      icon: <FaChalkboardTeacher className="w-8 h-8" />,
      gradient: "from-purple-500 to-purple-600"
    },
    {
      title: "Lifetime Support",
      description: "Lifetime support for upgradation",
      icon: <FaUsers className="w-8 h-8" />,
      gradient: "from-green-500 to-green-600"
    },
    {
      title: "Most Recommended",
      description: "Best reviews from our alumni",
      icon: <FaChartLine className="w-8 h-8" />,
      gradient: "from-red-500 to-red-600"
    }
  ];

  const popularCourses = [
    {
      title: "Digital Marketing",
      icon: <FaChartLine className="w-8 h-8" />,
      gradient: "from-blue-500 to-blue-600"
    },
    {
      title: "Govt. Certification",
      icon: <FaGraduationCap className="w-8 h-8" />,
      gradient: "from-purple-500 to-purple-600"
    },
    {
      title: "iCOP Pro",
      icon: <FaLaptopCode className="w-8 h-8" />,
      gradient: "from-green-500 to-green-600"
    },
    {
      title: "Online Degree",
      icon: <FaChalkboardTeacher className="w-8 h-8" />,
      gradient: "from-red-500 to-red-600"
    },
    {
      title: "Business Analytics",
      icon: <FaChartLine className="w-8 h-8" />,
      gradient: "from-yellow-500 to-yellow-600"
    },
    {
      title: "Industrial Designing",
      icon: <FaPalette className="w-8 h-8" />,
      gradient: "from-pink-500 to-pink-600"
    },
    {
      title: "Cloud Computing",
      icon: <FaCloud className="w-8 h-8" />,
      gradient: "from-indigo-500 to-indigo-600"
    },
    {
      title: "Programming",
      icon: <FaCode className="w-8 h-8" />,
      gradient: "from-teal-500 to-teal-600"
    }
  ];

  const testimonials = [
    {
      name: "John Doe",
      role: "Parent",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
      text: "The school management system has made it so much easier to track my child's progress and stay connected with teachers.",
      rating: 5
    },
    {
      name: "Jane Smith",
      role: "Teacher",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
      text: "As a teacher, I love how organized everything is. The system helps me manage my classes and communicate with parents effectively.",
      rating: 5
    },
    {
      name: "Mike Johnson",
      role: "Student",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
      text: "The online platform makes it easy to access my assignments and grades. It's user-friendly and helps me stay on top of my studies.",
      rating: 4
    }
  ];

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  const carouselSlides = [
    {
      title: "Welcome to School Management",
      description: "Streamline your school's administrative tasks with our comprehensive management solution.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      gradient: "from-blue-600/80 to-blue-800/80"
    },
    {
      title: "Expert Teachers",
      description: "Learn from the best educators in the industry with years of experience.",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      gradient: "from-purple-600/80 to-purple-800/80"
    },
    {
      title: "Modern Learning",
      description: "Experience cutting-edge technology and innovative teaching methods.",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      gradient: "from-green-600/80 to-green-800/80"
    },
    {
      title: "Student Success",
      description: "Track progress and achievements with our comprehensive student management system.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      gradient: "from-red-600/80 to-red-800/80"
    }
  ];

  const aboutStats = [
    {
      number: "10+",
      label: "Years Experience",
      icon: <FaAward className="w-8 h-8" />
    },
    {
      number: "1000+",
      label: "Students Enrolled",
      icon: <FaUsers className="w-8 h-8" />
    },
    {
      number: "50+",
      label: "Expert Teachers",
      icon: <FaChalkboardTeacher className="w-8 h-8" />
    },
    {
      number: "100+",
      label: "Courses Available",
      icon: <FaBook className="w-8 h-8" />
    }
  ];

  const contactInfo = [
    {
      icon: <FaPhone className="w-6 h-6" />,
      title: "Phone",
      value: "+1 234 567 890",
      link: "tel:+1234567890",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: <FaWhatsapp className="w-6 h-6" />,
      title: "WhatsApp",
      value: "Chat with us",
      link: "https://wa.me/1234567890",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      title: "Email",
      value: "info@school.com",
      link: "mailto:info@school.com",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      title: "Address",
      value: "123 School Street, City, Country",
      link: "https://maps.google.com",
      gradient: "from-red-500 to-red-600"
    }
  ];

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Features', href: '#features' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Contact', href: '#contact' },
    { name: 'Pay Online', href: '/pay-online', isHighlighted: true },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold text-blue-600"
              >
                School Management
              </motion.h1>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                item.isHighlighted ? (
                  <motion.div
                    key={item.name}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to={item.href}
                      className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-300"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ) : (
                  <motion.button 
                    key={item.name}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleNavClick(item.name, item.href)}
                    className={`relative px-3 py-2 text-gray-700 hover:text-blue-600 transition duration-300 ${
                      activeNav === item.name ? 'text-blue-600 font-semibold' : ''
                    }`}
                  >
                    {item.href.startsWith('#') ? (
                      <>
                        {item.name}
                        {activeNav === item.name && (
                          <motion.div
                            layoutId="activeNav"
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                            initial={false}
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          />
                        )}
                      </>
                    ) : (
                      <Link 
                        to={item.href}
                        onClick={() => handleNavClick(item.name, item.href)}
                        className="relative"
                      >
                        {item.name}
                        {activeNav === item.name && (
                          <motion.div
                            layoutId="activeNav"
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                            initial={false}
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          />
                        )}
                      </Link>
                    )}
                  </motion.button>
                )
              ))}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/login"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
                >
                  Login
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.div 
              whileTap={{ scale: 0.95 }}
              className="md:hidden flex items-center"
            >
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed inset-0 bg-white z-50"
          >
            <div className="flex justify-end p-4">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-blue-600 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                item.isHighlighted ? (
                  <motion.div 
                    key={item.name}
                    whileHover={{ x: 10 }}
                    className="mt-4"
                  >
                    <Link
                      to={item.href}
                      className="block w-full text-center px-3 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 text-lg"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ) : (
                  <motion.button 
                    key={item.name}
                    whileHover={{ x: 10 }}
                    onClick={() => {
                      handleNavClick(item.name, item.href);
                      setIsMenuOpen(false);
                    }}
                    className={`block w-full text-left px-3 py-2 text-lg transition duration-300 ${
                      activeNav === item.name 
                        ? 'text-blue-600 bg-blue-50 rounded-md font-semibold' 
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    {item.href.startsWith('#') ? (
                      item.name
                    ) : (
                      <Link 
                        to={item.href}
                        onClick={() => handleNavClick(item.name, item.href)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </motion.button>
                )
              ))}
              <motion.div whileHover={{ x: 10 }} className="mt-4">
                <Link
                  to="/login"
                  className="block w-full text-center px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-lg"
                >
                  Login
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Carousel */}
      <div className="relative pt-16">
        <Slider {...carouselSettings} className="w-full">
          {carouselSlides.map((slide, index) => (
            <div key={index} className="relative h-screen">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient}`} />
              <div className="relative h-full flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center">
                    <h1 className="text-5xl tracking-tight font-extrabold text-white sm:text-6xl md:text-7xl">
                      <span className="block">{slide.title}</span>
                    </h1>
                    <p className="mt-6 max-w-md mx-auto text-xl text-white sm:text-2xl md:mt-8 md:text-3xl md:max-w-3xl">
                      {slide.description}
                    </p>
                    <div className="mt-8 max-w-md mx-auto sm:flex sm:justify-center md:mt-10">
                      <div className="rounded-md shadow">
                        <Link
                          to="/login"
                          className="w-full flex items-center justify-center px-10 py-4 border border-transparent text-xl font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:py-5 md:text-2xl md:px-12"
                        >
                          Get Started
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Why Choose Us
            </h2>
            <p className="mt-6 text-xl text-gray-500">
              We provide the best learning experience with modern technology and expert instructors
            </p>
          </div>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className={`flex items-center justify-center h-24 w-24 rounded-xl bg-gradient-to-r ${feature.gradient} text-white mx-auto mb-6 transform group-hover:scale-110 transition duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-medium text-gray-900 group-hover:text-blue-600 transition duration-300">{feature.title}</h3>
                <p className="mt-4 text-lg text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div ref={aboutRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-4xl font-extrabold text-gray-900 sm:text-5xl"
              >
                About Our School
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="mt-6 text-xl text-gray-500"
              >
                We are committed to providing quality education and creating an environment where students can thrive and achieve their full potential. Our modern facilities and experienced faculty ensure that every student receives the attention and support they need to succeed.
              </motion.p>
              <div className="mt-12 grid grid-cols-2 gap-8 md:gap-12">
                {aboutStats.map((stat, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center group"
                  >
                    <div className="text-blue-600 mb-4 transform group-hover:scale-110 transition duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-4xl font-bold text-gray-900">{stat.number}</div>
                    <div className="text-lg text-gray-500 mt-2">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative mt-8 md:mt-0"
            >
              <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                  alt="School Campus"
                  className="object-cover w-full h-full transform hover:scale-105 transition duration-500"
                />
              </div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="absolute -bottom-8 -right-8 bg-blue-600 text-white p-6 md:p-8 rounded-2xl shadow-xl"
              >
                <FaGlobe className="w-12 h-12 md:w-16 md:h-16" />
                <p className="mt-2 md:mt-4 text-lg md:text-xl font-semibold">Global Education Standards</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Popular Courses Section */}
      <div ref={coursesRef} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
            Most Popular Courses
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {popularCourses.map((course, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r ${course.gradient} rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition duration-300 cursor-pointer transform hover:-translate-y-2`}
              >
                <div className="text-white mb-6 transform hover:scale-110 transition duration-300">
                  {course.icon}
                </div>
                <h3 className="text-xl font-medium text-white">{course.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Career Support Section */}
      <div ref={servicesRef} className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
            Career & Placement Support
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-8 rounded-2xl shadow-xl text-white hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
              <h3 className="text-2xl font-medium mb-4">Get Hired Faster</h3>
              <p className="text-lg">Our placement team will help you find the right opportunities.</p>
            </div>
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-8 rounded-2xl shadow-xl text-white hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
              <h3 className="text-2xl font-medium mb-4">Interview Scheduling</h3>
              <p className="text-lg">We'll help you prepare and schedule interviews with top companies.</p>
            </div>
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-8 rounded-2xl shadow-xl text-white hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
              <h3 className="text-2xl font-medium mb-4">Hands-on Projects</h3>
              <p className="text-lg">Work on real-world projects to build your portfolio.</p>
            </div>
            <div className="bg-gradient-to-r from-red-500 to-red-600 p-8 rounded-2xl shadow-xl text-white hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
              <h3 className="text-2xl font-medium mb-4">Resume Building</h3>
              <p className="text-lg">Get help creating a professional resume that stands out.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              What Our Users Say
            </h2>
            <p className="mt-6 text-xl text-gray-500">
              Hear from our community about their experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div ref={contactRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Contact Us
            </h2>
            <p className="mt-6 text-xl text-gray-500">
              Get in touch with us for any inquiries or support
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-gradient-to-r ${info.gradient} rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition duration-300 cursor-pointer text-white`}
              >
                <motion.div 
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="mb-4"
                >
                  {info.icon}
                </motion.div>
                <h3 className="text-xl font-medium mb-2">{info.title}</h3>
                <p className="text-white/80">{info.value}</p>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl shadow-xl p-8 text-center"
          >
            <h3 className="text-2xl font-medium text-white mb-4">Need Immediate Assistance?</h3>
            <p className="text-white mb-6">Our team is available 24/7 to help you with any questions or concerns.</p>
            <motion.a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-lg font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition duration-300"
            >
              <FaWhatsapp className="w-6 h-6 mr-2" />
              Chat on WhatsApp
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
                <li><Link to="/courses" className="text-gray-400 hover:text-white">Courses</Link></li>
                <li><Link to="/services" className="text-gray-400 hover:text-white">Services</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-white">About</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">Email: info@school.com</li>
                <li className="text-gray-400">Phone: +1 234 567 890</li>
                <li className="text-gray-400">Address: 123 School Street</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Newsletter</h3>
              <form className="mt-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="mt-2 w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; 2024 School Management System. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage; 