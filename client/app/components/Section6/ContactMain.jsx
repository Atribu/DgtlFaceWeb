"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const ContactMain = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    projectType: '',
    phone: '',
    email: '',
    additionalInfo1: '',
    additionalInfo2: ''
  });

  const [formMobile, setFormMobile] = useState({
    name: '',
    phone: '',
    message: '',
    policyAccepted: false
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  // Input alanları için genel değişim handler'ı
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

// Mobil input değişim handler'ı
const handleMobileChange = (e) => {
  const { name, value, type, checked } = e.target;
  setFormMobile({
    ...formMobile,
    [e.target.name]: e.target.value
  });
};

  
  // Form gönderim işlemi
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      // Mesaj içeriğini orijinal formata uygun şekilde oluşturma
      const message = `
        Hello! My name is ${formData.firstName} ${formData.lastName}
        I work at ${formData.company} company.
        I want you to do a project for us: ${formData.projectType}
        ${formData.additionalInfo1}
        For communication: ${formData.phone}, ${formData.email}
        In addition: ${formData.additionalInfo2}
        We thank you.
      `;

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.firstName,
          surname: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          message: message
        })
      });

      if (!response.ok) {
        throw new Error('Gönderim başarısız oldu');
      }

      setSuccess(true);
      // Formu temizle
      setFormData({
        firstName: '',
        lastName: '',
        company: '',
        projectType: '',
        phone: '',
        email: '',
        additionalInfo1: '',
        additionalInfo2: ''
      });
    } catch (err) {
      setError(err.message || 'Bir hata oluştu, lütfen tekrar deneyin');
    } finally {
      setLoading(false);
    }
  };


// Mobil form gönderim işlemi
const handleMobileSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError('');
  setSuccess(false);

  try {
    // Policy kontrolü
    if (!formMobile.policyAccepted) {
      throw new Error('Lütfen gizlilik politikasını kabul edin');
    }

    // Mobil mesaj formatı
    const message = `
      Hello! My name is ${formMobile.name}
      For communication: ${formMobile.phone}
      Message: ${formMobile.message}
      We thank you.
    `;

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formMobile.name.split(' ')[0] || '',
        surname: formMobile.name.split(' ')[1] || '',
        email: '', // Mobilde email yok
        phone: formMobile.phone,
        message: message
      })
    });

    if (!response.ok) {
      throw new Error('Gönderim başarısız oldu');
    }

    setSuccess(true);
    // Mobil formu temizle
    setFormMobile({
      name: '',
      phone: '',
      message: '',
      policyAccepted: false
    });

  } catch (err) {
    setError(err.message || 'Bir hata oluştu, lütfen tekrar deneyin');
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="flex flex-col lg:flex-row lg:gap-12 mt-0 mb-12 items-center justify-center">
      <div className="flex flex-col lg:w-[620px] items-center justify-center">
        <div className="flex flex-row lg:flex-col gap-6 justify-center items-start">
          {/* Telefon */}
          <Link href="tel:+905326451767" className="flex flex-col lg:flex-row items-center gap-6">
            {/* GIF için .gif uzantılı bir dosya kullanabilirsiniz. */}
            <img
              src="https://s3-alpha-sig.figma.com/img/ce62/a04b/57a06fc49b102b0e871cb3ac38cd0287?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Vw4z0zYYzGGuAVoSGXFxPjAjXmAFI5o9OqxzZc3aae7D~qNZJqPPEkVpvZ3knSLNou77LS0OHCD2CQyF4r8Sb8DqTxxC5xRFXyxYTk4ytUepoKQGpKEXReoBqU9owPPGxyJwLZv9M1QvCAat7KjJm5qllS6eegv9ptkrKAQUysK24kSSnQjg4mMK3jMNI8QYOpsGN4T6d3ymlB6IhyQ4LaLoqvLQ9J-vOa3OQbaIBTmph7XS5c6h7cOLsUsXSNphnaKqtkB6-jOlBcKx8wnN9qstm3MGKiCrCVBpI6HY3vEzKJMEGgSQAH59n~QnUdT9NSAgTMaDLhKJKJattw9vFw__"
              alt="Phone GIF"
              className="w-[48px] h-[48px] lg:w-10 lg:h-10"
            />
            <p className="flex text-darkBlue lg:hidden">Phone</p>
            <div className="hidden lg:flex flex-col">
              <span className="text-[#140f25] text-base font-normal font-inter leading-snug text-start">
                Call Now
              </span>
              <p className="text-[#140f25] text-2xl font-bold font-['Inter'] leading-[28.80px]">
                0 532 645 17 67
              </p>
            </div>
          </Link>

          {/* E-Posta */}
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <img
              src="https://s3-alpha-sig.figma.com/img/9d3f/a0e3/da597f3ba21d3a47c7c2d573e288ad6c?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=GG-2DlPfY5Y3jPFmscqhAQlqS5IYVnsny4bSzJGHNmmb67UbU3TOBTuwntAC6LBzVVLf9uK9Fc49LiBnSFRk~6kCb9hm7DrYD~cFf8VPkq35kjccCerRq2wJf0ayk1U~FvYhAks1LIe7AWspk6Ss0m6yVPvoDEENQMlOqWichG5ZEQpmsNC5sh-7M9gS0tV~OggLEYsoJ~WF5OU7x8bTB9wVlgGa20A1RA-e4rY6lxXJI83nexc2ELTzz9BJEekzgv0q32-gLBydJQhFKRKQZBZIvb4mdD6Ogtb3nWTTJrg8PfkeqegdEkguhrnaQvVh6PeKYC4If4pTn7F2D4APJQ__"
              alt="Email GIF"
              className="w-[48px] h-[48px] lg:w-10 lg:h-10"
            />
            <p className="flex lg:hidden text-darkBlue">Mail</p>
            <div className="hidden lg:flex flex-col">
              <span className="text-[#140f25] text-base font-normal font-['Inter'] leading-snug text-start">
                E - Mail
              </span>
              <p  className="text-[#140f25] text-2xl font-bold font-['Inter'] leading-[28.80px]">
                info@dgtlface.com
              </p>
            </div>
          </div>

          {/* Konum */}
          <Link href="/contact" className="flex flex-col lg:flex-row items-center gap-6">
            <img
              src="https://s3-alpha-sig.figma.com/img/435a/2ee0/f77d58e8d2dd5ed5bef41401efa03976?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=nVZIdMB1iK-BNexHijmbv3UBhLYbCU-audmW45GhmI2WzqfvrcUjHc5vGm8TlxtqtQZpIK050scsY2FLAACcqA07oiXjRx62vZZCDJbeYuDMxIS9YYXPbfoUBh3U9CjXZbMEiMeN-RW1oPXvd-fQkyy4dsW9F6JQzbT4arVVuePrsoHhtlZ1VlWR4XJMop8UwD91GWIhHbZRgntwdpssvWd14GI~EeMa6LjlvAOnrbAhVSXpJApPsQmKhUBXHvfAGMd-dZpuqBIcVpkWt6UfFn5Xar0uSewlgXOd2MEpMA9X8wmm5pfFKYxX8ftnw3pFREqk4oaI8ih9NHRjpeYu0g__"
              alt="Location GIF"
              className="w-[48px] h-[48px] lg:w-10 lg:h-10"
            />
            <p className="flex lg:hidden text-darkBlue">Address</p>
            <div className="hidden lg:flex flex-col">
              <span className="text-[#140f25] text-base font-normal font-['Inter'] leading-snug text-start">
                Location
              </span>
              <p className="text-[#140f25] text-2xl font-bold font-['Inter'] leading-[28.80px]">
                Muratpaşa / Antalya
              </p>
            </div>
          </Link>
        </div>
      </div>
      <div>
      <form 
      onSubmit={handleSubmit}
      className="hidden lg:inline-flex w-[620px] p-12 bg-white rounded-[25px] shadow-[-15px_30px_150px_0px_rgba(20,12,41,0.05)] flex-col justify-start items-center gap-12" >
        
      <div className="relative justify-start text-[#140f25] text-[32px] font-bold font-['Inter'] leading-[38.40px]">
        Send Message
      </div>
      
      <div className="flex flex-col justify-start items-start gap-4 whitespace-nowrap">
        {/* Name Section */}
        <div className="inline-flex justify-start items-center gap-5">
          <div className="text-[#140f25] text-2xl font-medium font-['Inter'] leading-[28.80px]">
            Hello! My name is
          </div>
          <div className="flex gap-2">
            <input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="................................................................................."
              className="w-[100%] h-6 px-2 bg-transparent text-[#54b9cf] text-2xl focus:outline-none placeholder-[#54b9cf]"
            />
            <input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="................................................................................."
              className="w-[100%] h-6 px-2 bg-transparent text-[#54b9cf] text-2xl focus:outline-none placeholder-[#54b9cf]"
            />
          </div>
        </div>

        {/* Company Section */}
        <div className="inline-flex justify-start items-center gap-5">
          <div className="text-[#140f25] text-2xl font-medium font-['Inter'] leading-[28.80px]">
            I work at
          </div>
          <input
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="................................................................................."
            className="w-[100%] h-6 px-2 bg-transparent text-[#54b9cf] text-2xl focus:outline-none placeholder-[#54b9cf]"
          />
          <div className="text-[#140f25] text-2xl font-medium font-['Inter'] leading-[28.80px]">
            company.
          </div>
        </div>

        {/* Project Type */}
        <div className="inline-flex justify-start items-center gap-5">
          <div className="text-[#140f25] text-2xl font-medium font-['Inter'] leading-[28.80px]">
            I want you to do a project for us;
          </div>
          <input
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            placeholder="................................................................................."
            className="w-[100%] h-6 px-2 bg-transparent text-[#54b9cf] text-2xl focus:outline-none placeholder-[#54b9cf]"
          />
        </div>

        {/* Additional Info 1 */}
        <input
          name="additionalInfo1"
          value={formData.additionalInfo1}
          onChange={handleChange}
          placeholder="................................................................................."
          className="w-[100%] h-6 px-2  bg-transparent text-[#54b9cf] text-2xl focus:outline-none placeholder-[#54b9cf]"
        />

        {/* Contact Info */}
        <div className="inline-flex justify-start items-center gap-5">
          <div className="text-[#140f25] text-2xl font-medium font-['Inter'] leading-[28.80px]">
            for communication
          </div>
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+........(....)........... ....... ....... ..............."
            className="w-[100%] h-6 bg-transparent text-[#54b9cf] text-2xl focus:outline-none placeholder-[#54b9cf]"
          />
         
        </div>

        {/* Additional Info 2 */}
        <div className="inline-flex justify-start items-center gap-5">
        <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="................................................................................."
            className="w-[100%] h-6 px-2 bg-transparent text-[#54b9cf] text-2xl focus:outline-none placeholder-[#54b9cf]"
          />
          <div className="text-[#140f25] text-2xl font-medium font-['Inter'] leading-[28.80px]">
            In addition,
          </div>
          
        </div>

        {/* Final Line */}
        <input
            name="additionalInfo2"
            value={formData.additionalInfo2}
            onChange={handleChange}
            placeholder="................................................................................."
            className="w-[100%] h-6 relative justify-end text-[#54b9cf] text-2xl font-medium font-['Inter'] leading-[28.80px] border-[#54b9cf] bg-transparent  focus:outline-none placeholder-[#54b9cf]"
          />

        <div className="text-[#140f25] text-2xl font-medium font-['Inter'] leading-[28.80px]">
          We thank you.
        </div>
      </div>

      {/* <button
        type="submit"
        className="px-8 py-4 rounded-[14px] border gradient-border-button inline-flex justify-center items-center gap-2.5 hover:bg-[#54b9cf] hover:text-white transition-colors"
      >
        <p className="text-[#140f25] text-sm font-bold font-['Inter'] leading-[16.80px]">
          Send
        </p>
      </button> */}

{success && (
        <div className="text-green-600 text-lg">
          Mesajınız başarıyla gönderildi!
        </div>
      )}
      
      {error && (
        <div className="text-red-600 text-lg">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className={`px-8 py-4 rounded-[14px] inline-flex justify-center items-center gap-2.5 gradient-border-button hover:bg-[#54b9cf] !hover:text-white !text-darkBlue ${
          loading ? 'opacity-50 cursor-not-allowed hover:bg-[#54b9cf] hover:text-white' : 'hover:bg-[#54b9cf] hover:text-white'
        } transition-colors`}
      >
        {loading ? (
          <div className=" text-sm font-bold font-['Inter'] leading-[16.80px]">
            Gönderiliyor...
          </div>
        ) : (
          <div className=" text-sm  font-bold font-['Inter'] leading-[16.80px]  ">
            Send
          </div>
        )}
      </button>
    </form>


        {/* Mobile Form */}
        <div className="flex lg:hidden w-[95%] py-[18px] px-[15px] bg-white items-center justify-center">
          <form
           onSubmit={handleMobileSubmit}
            className="flex flex-col w-full items-center justify-center text-start gap-[18px] text-darkBlue font-inter"
          >
            <h5 className="text-[24px] -tracking-[0.48px] font-bold leading-[120%] whitespace-nowrap">
              Send Message
            </h5>
            <div className="flex flex-col gap-[11px] w-full">
              <label className="block text-[14px] font-bold leading-[120%] -tracking-[0.28px]">
                Name / Surname;
              </label>
              <input
                type="text"
                name="name"
                value={formMobile.name}
                onChange={handleMobileChange}
                placeholder="Your Name"
                className="w-full px-[20px] py-[10px] bg-transparent border-dotted border rounded-[10px] border-[#54B9CF] outline-none placeholder:text-[14px] placeholder:text-darkBlue placeholder:font-semibold"
              />
            </div>

            <div className="flex flex-col gap-[11px] w-full">
              <label className="block text-[14px] font-bold leading-[120%] -tracking-[0.28px]">
                Phone Number;
              </label>
              <input
                name="phone"
                value={formMobile.phone}
                onChange={handleMobileChange}
                placeholder="+....... ( ............ ) ......................................"
                className="w-full py-[10px] bg-transparent border-dotted border rounded-[10px]  border-[#54B9CF] outline-none placeholder:text-[14px] placeholder:text-darkBlue placeholder:font-semibold"
              />
            </div>

            <div className="flex flex-col gap-[11px] w-full">
              <label className="block text-[14px] font-bold leading-[120%] -tracking-[0.28px]">
                Message;
              </label>
              <input
                type="text"
                name="message"
                value={formMobile.message}
                onChange={handleMobileChange}
                placeholder=""
                className="w-full px-[20px] py-[10px] bg-transparent !border-dotted rounded-[10px] border border-[#54B9CF] outline-none placeholder:text-[14px] placeholder:text-darkBlue placeholder:font-semibold"
              />
            </div>

            <div className="flex items-center justify-start gap-[17px] w-full">
              <input
                type="checkbox"
                name="policyAccepted"
                checked={formMobile.policyAccepted}
                onChange={handleMobileChange}
                className="w-[20px] h-[20px] items-center justify-center text-center appearance-none border border-[#152741] bg-transparent focus:outline-none
               checked:after:content-['✓']  checked:after:text-darkBlue checked:after:text-[16px]
               checked:after:flex checked:after:items-center checked:after:justify-center "
              />
              <label className="text-[16px] font-normal leading-[26.667px] text-[#152741] cursor-pointer underline ">
                Contact Form Policy
              </label>
            </div>

            <button 
    type="submit"
    disabled={loading}
    className="w-full min-w-[330px] gradient-border-button bg-white border text-[14px] -tracking-[0.28px] leading-[120%] font-bold !text-darkBlue py-[16px] px-[32px] min-h-[42px]"
  >
    {loading ? 'Gönderiliyor...' : 'Send'}
  </button>
            {/* <button className="w-full min-w-[330px] gradient-border-button bg-white border text-[14px] -tracking-[0.28px] leading-[120%] font-bold !text-darkBlue py-[16px] px-[32px] min-h-[42px]">
              Send
            </button> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMain;
