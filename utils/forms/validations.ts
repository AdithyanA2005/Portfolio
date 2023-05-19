export const nameValidationRules = {
  required: "Name is missing",
  pattern: {
    value: /^[a-zA-Z.' ]+$/,
    message: "Name shouldnt contain numbers or special characters"
  },
};

export const emailValidationRules = {
  required: "Email is missing",
  pattern: {
    value: /^\S+@\S+$/i,
    message: "Invalid email address"
  },
};

export const subjectValidationRules = {
  required: "Subject is missing"
};

export const messageValidationRules = {
  required: "Message is missing",
};
