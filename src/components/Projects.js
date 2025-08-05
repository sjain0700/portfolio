import React from 'react';
//import {} from '../assets/DL_app.png'

const projects = [
  {
    id: 1,
    title: "Damac Living – Property Management App",
    platform: "React Native (iOS & Android, Redux, Saga)",
    description:
      "Property management app for Damac customers. Smart Home (Use Socket), IOT",
    link: "https://apps.apple.com/us/app/damac-living/id1446489552",
    thumbnail:require('../assets/DL_app.png'),
  },
  {
    id: 2,//
    title: "MyFIRST Salary App ( BFSI, Bank App )",
    platform: "Android, ios",
    description:
      "This app is used for creating a corporate salary account in IDFC bank. This app is developed for IDFC bank",
    link: "https://play.google.com/store/apps/details?id=com.idfcfirstbank.csapp",
    thumbnail:require('../assets/idfc_app.png'),
  },
  {
    id: 3,
    title: "Microsoft MyHub App",
    platform: "React Native (React-Native, Typescript, Redux)",
    description: "MyHub is an app that brings together the tools and services Microsoft employees use every day.",
    link: "https://apps.apple.com/us/app/microsoft-myhub/id1476326475",
    thumbnail:require('../assets/ms_app.png'),
       // No app icon, so using favicon
  },
  {
    id: 4,
    title: "MamaEarth Online Shopping App(Ecommerce, 10+ millions downloads)",
    platform: "React native (Android, iOS, Redux-thunk, Cart, Cash on delivery)",
    description:
      "Ecommerce app is used for online shopping in India.",
    link: "https://play.google.com/store/apps/details?id=com.mamaearthapp&hl=en",
    thumbnail:require('../assets/ecom_app.png'),
  },
  {
    id: 5,
    title: "Saal Health App - (Health Care - RN app)",
    platform: "React native(Local database, Sqlite, Android, iOS)",
    description:
      "Healthcare lifestyle tracker for Manage medication, Lab Reports, Vitals, Health Risk Assessment.this app is used for managing health data at mobile end reminders.",
    link: "#",
   // thumbnail:require('../assets/bar.png'),
  },
   {
    id: 6,
    title: "Msheireb cars App",
    platform: "Flutter (Android, iOS, Bilingual-English and Arabic)",
    description:
      "This app shows Vehicles List, Detail, Finance Calculating, Vehicles search different criteria",
    link: "https://play.google.com/store/apps/details?id=com.msheirebcars",
  },
  {
    id: 7,
    title: "MG Calculator (Bank App, Amortization Calculator)",
    platform: "iOS App, Objective C",
    description:
      "FLoan app calculates the affordable Loan, mortgage calculation, and Amortization for Loan.",
    link: "https://itunes.apple.com/us/app/mg-calculator/id902956669?ls=1&mt=8",
  },
  {
    id: 8,
    title: "Cheese Cake App",
    platform: "Enterprise App(iPad app, iOS, Objective C)",
    description: "App is used for Cake Shop in Australia, for a customer can see different types of cake in the app.",
    link: "#",
  },
  {
    id: 9,
    title: "Polleniser App",
    platform: "iOS Native (Objective C)",
    description: "Social networking app (Multiple nearest friends Location sharing and Friends show on map), make a group. FbFriend invitation",
    link: "https://itunes.apple.com/in/app/polleniser/id1038375749?mt=8&ign-mpt=uo%3D4",
  },
  {
    id: 10,
    title: "Deal finder App:",
    platform: "iOS Native (Objective-C)",
    description: "Deals (restaurant) find nearby Location. Draw path From Current Location to Restaurant.",
    link: "https://itunes.apple.com/us/app/pub-grub/id1033438479?ls=1&mt=8",
  },
  {
    id: 11,
    title: "Rent Buy App",
    platform: "iOS Native (Objective C)",
    description:
      "This is a real estate website. This app provides the facility for property, agent search and add any property for sale, buy, rent",
    link: "#",
  },
   {
    id: 12,
    title: "Night owl app",
    platform: "iOS Native (Objective C, Paypal payment gateway)",
    description: "Night owl app Search Bar Restaurant list in USA. Friends invite. Bar Owner Register with payment.",
    link: "#",
  },
  {
    id: 13,
    title: "Tour of Oman",
    platform: "iOS Native (Objective C, Paypal payment gateway)",
    description: "Tour of Oman app shows the live results and Participant Teams and Team Member details and country, Route Maps and Event Dates, Live Result, Winner Details of Each Stage.",
    link: "#",
  },
  {
    id: 14,
    title: "Photo Collage Creator",
    platform: "iOS Native (Objective C)",
    description: "Create beautiful photo collages in seconds—straight from your iPhone photo album with Image Collage!",
    link: "#",
  },
  {
    id: 15,
    title: "Student Discussion App",
    platform: "iOS Native (Objective C, APIs, JSON)",
    description: "The student discussion app includes WhatsApp-like functionality such as one-on-one and group chats, friend requests, blocking users, profile likes, and the ability to share profiles on Facebook.",
    link: "#",
  }
];


const Projects = () => {
  return (
    <header style={{backgroundColor: '#282c34'}}>
    <div style={{ padding: 20, maxWidth: 900, margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", marginBottom: 40 ,color:'white'}}>My Projects</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))",
          gap: 20,
        }}
      >
        {projects.map(({ id, title, platform, description, link, thumbnail }) => (
          <a
            key={id}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: "#222",
              border: "1px solid #ddd",
              borderRadius: 8,
              overflow: "hidden",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#fff",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "scale(1.03)";
              e.currentTarget.style.boxShadow = "0 8px 15px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
            }}
          >
            { thumbnail &&
              <img
              src={thumbnail}
              alt={title}
              style={{ width: "100%", height: 160, objectFit: "cover" }}
            />
            }
            <div style={{ padding: 15, flexGrow: 1 }}>
              <h2 style={{ fontSize: 18, marginBottom: 6 }}>{title}</h2>
              <p
                style={{
                  fontSize: 14,
                  color: "#555",
                  marginBottom: 10,
                  fontStyle: "italic",
                }}
              >
                {platform}
              </p>
              <p style={{ fontSize: 14 }}>{description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
    </header>
  );
}

export default Projects;


// {
  //   id: 3,
  //   title: "Damac Chairman Website",
  //   platform: "React.js",
  //   description: "Internal-use website for managing chairman profile.",
  //   link: "https://hussainsajwani.com/",
  //  // thumbnail:require('../assets/hasni.png'),
  //      // No app icon, so using favicon
  // },