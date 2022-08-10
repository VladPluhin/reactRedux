import { createApi } from "unsplash-js";

export default class  State {
   
  createApi = createApi({
      accessKey: "k6MK8xSwdSo_9QcKO4iLm0r_nirfy7FUADRtpAMqhRw",
  });
 
  filterOptions= {
    orientation: [
      "portrait", "landscape","squarish"
    ],
    postsCounter:[
      "5", "15", "30"
    ],
    colors: [
      "black_and_white",
        "black",
        "white",
        "yellow",
        "orange",
        "red",
        "purple",
        "magenta",
        "green",
        "teal",
        "blue",
    ]
  };
  firebaseOptions ={
      apiKey: 'AIzaSyAfazkMR1c0CzOFAA5r64C8s_YYUVZlTkc',
      authDomain: "pictureap.firebaseapp.com",
      projectId: "pictureap",
      storageBucket: "pictureap.appspot.com",
      messagingSenderId: "951555448440",
      appId: "1:951555448440:web:3bdeb0dcf68107f740178d",
      measurementId: "G-BPDQ74YX9B"
  }
}
