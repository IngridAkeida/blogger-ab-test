import { useState } from 'react';

export default function SubscriptionForm({visitor}) {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      formData,{
      event: "ctaSubscribeSubmit",
      cta: "button",
      group: visitor === 0 ? "messageA" : "messageB",
    });

    const alertA = () => alert("Thank you, now you are member, check your E-mail box!");
    const alertB = () => alert("Thank you for being part, you will soon receive more information in your email!");

    setFormData({
      name: '',
      email: ''
        
    });

    if(formData.name && formData.email){
      visitor === 0 ? alertA() : alertB()
    } 
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto py-8">
  <h2 className="text-2xl font-semibold mb-4 text-center">Become a Member Today, it`s free!</h2>
  <div className="space-y-4">
    <div>
      <label htmlFor="name" className="block mb-1">Name:</label>
      <input
        type="text"
        name="name"
        id="name"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
      />
    </div>
    <div>
      <label htmlFor="email" className="block mb-1">Email:</label>
      <input
        type="email"
        name="email"
        id="email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
      />
    </div>
    
    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300" >Subscribe</button>
  </div>
</form>
  );
}

