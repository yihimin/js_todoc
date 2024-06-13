import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WritingPage from './pages/WritingPage';
import MainPage from './pages/MainPage';
import SearchPage from './pages/SearchPage';
import SignUpPage from './pages/SignUpPage';
import MyPage from './pages/MyPages/MyPage';
import PaymentInfoPage from './pages/MyPages/PaymentInfoPage';
import UpdateInfoPage from './pages/MyPages/UpdateInfoPage';
import LoginPage from './pages/LoginPages/LoginPage';
import ForgotPasswordPage from './pages/LoginPages/ForgotPasswordPage';
import ChangePasswordPage from './pages/LoginPages/ChangePasswordPage';
import PaymentPage from './pages/PaymentPages/PaymentPage';
import MembershipCancelPage from './pages/PaymentPages/MembershipCancelPage';
import PaymentHistoryPage from './pages/PaymentPages/PaymentHistoryPage';
import PaymentMethodPage from './pages/PaymentPages/PaymentMethodPage';
import LandingPage from './pages/LandingPage';

function App() {
  return (
      <Router>
        <Switch>
          <Route path="/writing" component={WritingPage} />
          <Route path="/main" component={MainPage} />
          <Route path="/search" component={SearchPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/mypage" component={MyPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/payment" component={PaymentPage} />
          <Route exact path="/" component={LandingPage} />
          {/* Sub Pages */}
          <Route path="/mypage/update-info" component={UpdateInfoPage} />
          <Route path="/mypage/payment-info" component={PaymentInfoPage} />
          <Route path="/mypage/payment-history" component={PaymentHistoryPage} />
          <Route path="/mypage/payment-method" component={PaymentMethodPage} />
          <Route path="/mypage/membership-cancel" component={MembershipCancelPage} />
          <Route path="/forgot-password" component={ForgotPasswordPage} />
          <Route path="/change-password" component={ChangePasswordPage} />
        </Switch>
      </Router>
  );
}

export default App;
