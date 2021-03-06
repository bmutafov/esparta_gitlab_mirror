import { commonStyles } from "./commonStyles";
import { asStyle } from "./_sx_interface";
import signInBackground from "../../assets/sign_in_background.jpg";

export const signInStyles = asStyle({
  grid: {
    backgroundImage: `url(${signInBackground})`,
    backgroundRepeat: "no-repeat",
    backgroundColor: (t) => (t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900]),
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  inputPaper: {
    my: 3,
    mx: 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  form: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    mt: 1,
    width: "100%",
  },
  signInIcon: { m: 1, bgcolor: "secondary.main", width: 60, height: 60 },
  languageSwitcher: {
    ...commonStyles.flex,
    flexDirection: "row-reverse",
    m: 3,
  },
  buttonContainer: {
    display: "flex",
    gap: "1rem",
    height: "50px",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  errorMessage: {
    mt: 2,
    mb: 1,
    width: "100%",
  },
});
