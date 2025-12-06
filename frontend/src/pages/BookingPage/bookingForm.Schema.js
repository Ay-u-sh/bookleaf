export const bookingSchema = {
    customer_name: {
      htmlFor: "customer_name",
      label: "Name",
      iconName: "person",
      helper: "Please enter your full name.",
      htmlProps: {
        id: "customer_name",
        name: "customer_name",
        type: "text",
        required: true,
        autoComplete: "name",
        minLength: 2,
        maxLength: 50,
        placeholder: ""
      }
    },
  
    customer_phone: {
      htmlFor: "customer_phone",
      label: "Phone",
      iconName: "call",
      helper: "We’ll use this to reach you if needed.",
      htmlProps: {
        id: "customer_phone",
        name: "customer_phone",
        type: "tel",
        required: true,
        autoComplete: "tel",
        pattern: "^[0-9+\\- ]{6,20}$",
        maxLength: 10,
        placeholder: ""
      }
    },
  
    customer_email: {
      htmlFor: "customer_email",
      label: "Email",
      iconName: "mail",
      helper: "Recommended so we can send booking confirmations.",
      htmlProps: {
        id: "customer_email",
        name: "customer_email",
        type: "email",
        required: true,
        autoComplete: "email",
        placeholder: ""
      }
    },
  
    booked_date: {
      htmlFor: "booked_date",
      label: "Date",
      iconName:'',
      helper: "Choose your preferred appointment date.",
      htmlProps: {
        id: "booked_date",
        name: "booked_date",
        type: "date",
        required: true,
        min: new Date().toISOString().split("T")[0]
      },
      component: "date"
    },
  
    booked_time: {
      htmlFor: "booked_time",
      label: "Time",
      iconName: "schedule",
      helper: "Choose any available time from the list.",
      htmlProps: {
        id: "booked_time",
        name: "booked_time",
        required: true
      },
      component: "select",
    },
  
    message: {
      htmlFor: "message",
      label: "Message",
      iconName: "chat",
      helper: "Optional: share anything we should know before your visit.",
      htmlProps: {
        id: "message",
        name: "message",
        rows: 3,
        maxLength: 500,
        placeholder: "Add any notes or preferences…"
      },
      component: "textarea"
    }
  };
  