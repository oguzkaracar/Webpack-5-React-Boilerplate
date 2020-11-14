import React from 'react';
import image from '../images/img.jpg';

export default function App() {
  return (
    <div>
      <h1>Hello from React</h1>
      <img src={image} alt="Image" width="500" />
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor fuga suscipit blanditiis nobis provident ullam, consectetur asperiores, delectus error corporis reiciendis odio sequi illum est facere commodi nihil labore modi.</p>
    </div>
  );
}

// if (module.hot) {
//   module.hot.accept(function (err) {
//     console.log('error...', err);
//   });
//   console.log('updates..');
// }
