import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { login } from 'redux/user/userOperations';
import { GoogleLogin } from '../../components/LoginRegister/GoogleLogin/GoogleLogin';
import { LoginRegisterText } from '../../components/LoginRegister/LoginRegisterText/LoginRegisterText';
// import {LoginRegisterWrapper} from '../../components/LoginRegister/LoginRegisterWrapper'
import {
  LoginPageWrapper,
  LoginForm,
  LoginFormLabel,
  LoginFormInput,
  LoginButton,
  RegisterNavLink,
  Background
 
} from './LoginPage.styled';
import { Wrapper, Title, CabbageTop, } from 'pages/HomePage/HomePage.styled';
import title from '../../images/title/title.png';
import { Container } from 'components/App.styled';
import { FooterImg } from 'components/Footer/Footer';
import 'animate.css';

 function LoginPage() {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const { email, password } = event.target.elements;

    const user = {
      email: email.value,
      password: password.value,
    };

    dispatch(login(user));
    event.target.reset();
  };

   return (
     <Background>
       <CabbageTop>
         <Container>
           <Wrapper>
             <div>
               <Title className='animate__animated animate__hinge' src={title} />
               <Title className='animate__animated animate__fadeInUpBig animate__delay-2s' src={title} />
             </div>
             <div>
               <LoginPageWrapper className='animate__animated animate__flip' >
                 <GoogleLogin />


                 <LoginRegisterText />
                 <LoginForm onSubmit={handleSubmit}>
                   <LoginFormLabel>
                     Email:
                     <LoginFormInput
                       type="text"
                       name="email"
                       placeholder="your@mail.com"
                       required
                     />
                   </LoginFormLabel>
                   <LoginFormLabel>
                     Password:
                     <LoginFormInput
                       type="password"
                       name="password"
                       placeholder="password"
                       required
                     />
                   </LoginFormLabel>
                   <LoginButton type="submit">Log in</LoginButton>
                 </LoginForm>
                 <RegisterNavLink>
                   <NavLink to="/register" style={{ padding: '12px 14px' }}>
                     Registration
                   </NavLink>
                 </RegisterNavLink>
               </LoginPageWrapper>
             </div>
           </Wrapper>
           <FooterImg />
         </Container>
       </CabbageTop>
     </Background>
//    );
    
//     </div>
//     <div>
//     <LoginPageWrapper>
//       <GoogleLogin />
//       <LoginRegisterText />
//       <LoginForm onSubmit={handleSubmit}>
//         <LoginFormLabel>
//           Email:
//           <LoginFormInput
//             type="text"
//             name="email"
//             placeholder="your@mail.com"
//             requred
//           />
//         </LoginFormLabel>
//         <LoginFormLabel>
//           Password:
//           <LoginFormInput
//             type="password"
//             name="password"
//             placeholder="password"
//             requred
//           />
//         </LoginFormLabel>
//         <LoginButton  type="submit">Log in</LoginButton>
//       </LoginForm>
//       <RegisterNavLink>
//         <NavLink to="/register" style={{ padding: '12px 14px' }}>
//           Registration
//         </NavLink>
//       </RegisterNavLink>
//     </LoginPageWrapper>
//     </div>
//   </Wrapper>
//   <FooterImg/>
//   </Container>
//   </CabbageTop>
//   </Background>
    
  );
}

export default LoginPage;