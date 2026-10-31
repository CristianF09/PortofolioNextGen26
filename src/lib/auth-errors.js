// Maps Firebase Auth error codes to user-friendly messages.
// An empty string means "don't show anything" (e.g. the user closed a popup themselves).
const MESSAGES = {
  "auth/invalid-email": "Please enter a valid email address.",
  "auth/missing-password": "Please enter your password.",
  "auth/user-disabled": "This account has been disabled.",
  "auth/user-not-found": "Invalid email or password.",
  "auth/wrong-password": "Invalid email or password.",
  "auth/invalid-credential": "Invalid email or password.",
  "auth/email-already-in-use": "An account with this email already exists.",
  "auth/weak-password": "Password must be at least 6 characters.",
  "auth/too-many-requests": "Too many attempts. Please try again later.",
  "auth/network-request-failed": "Network error. Check your connection and try again.",
  "auth/operation-not-allowed": "This sign-in method is not enabled.",
  "auth/account-exists-with-different-credential":
    "An account already exists with this email using a different sign-in method.",
  "auth/popup-closed-by-user": "",
  "auth/cancelled-popup-request": "",
};

export function getAuthErrorMessage(err, fallback = "Something went wrong. Please try again.") {
  if (err && typeof err.code === "string" && err.code in MESSAGES) {
    return MESSAGES[err.code];
  }
  return fallback;
}
