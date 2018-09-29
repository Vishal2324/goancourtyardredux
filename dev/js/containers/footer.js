import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {headerData} from '../actions/index';
import {Router, Route, NavLink, BrowserRouter, Switch, Redirect} from "react-router-dom";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

class Footer extends Component {

    componentDidMount() {
      this.props.headerData();
    }

    renderdom() {

        if (!this.props.header) {
          return (<div></div>);
        }
        if (!this.props.home) {
          return (<div></div>);
        }

        return (
            <div>
              <br/>
              <br/>
              <div className="footstyle">
                {/*<div className="container divalignment webview" style={{backgroundColor:'transparent'}}>
                  <div className="row">
                    {
                      this.props.header.header.map((footdata,i)=>
                        <div className={['col-xs-4','col-sm-4'].join(' ')} key={i}>
                          <h4 style={{color: '#ffffff',fontSize: '1.4em'}}>{ReactHtmlParser(footdata.primary_link)}</h4>
                          <hr/>

                        </div>
                      )
                    }
                  </div>
                </div>*/}
                <div className="container divalignment mobileview" style={{backgroundColor:'transparent'}}>
                  <div id="footDiv" className="row">
                    {
                      this.props.header.header.map((footdata,i)=>
                        <a href="#">
                          <div key={i}>
                            <h4 style={{color: '#ffffff',fontSize: '1.4em'}}>
                              {ReactHtmlParser(footdata.primary_link)}
                              <i style={{color:'#fff',fontSize:'1.3em'}} className="fa fa-angle-right pull-right"></i>
                            </h4>
                            <hr/>
                          </div>
                        </a>
                      )
                    } 
                  </div>
                  {/*<div className="row" id="myDiv" style={{display:'none'}}>
                    <a href="#">
                      <i style={{color:'#fff',fontSize:'1.5em'}} className="fa fa-angle-left pull-left"></i></a>
                      <h4 style={{color: '#ffffff',fontSize: '1.4em',textAlign:'center'}}>{ReactHtmlParser(this.state.collapsefoot)}</h4>
                      <hr/>
                      {
                        this.state.footcollapsedata.map((footdowndata,j)=>
                          <div style={{textAlign:'center'}}>
                            <a href={'/' + footdowndata.url} style={{color:'#fff',fontSize: '1.3em'}}>{ReactHtmlParser(footdowndata.urlname)}</a>
                            <br/>
                            <br/>
                          </div>
                        )
                      }
                    </div>*/}
                  </div>
                  <div className="container-fluid">
                    <div className="row">
                      <ul className="nav navbar-nav navbar-center footnavlink" style={{position:'relative'}}>
                        {/*<li className="footlinknew"><a href="#">home</a></li>
                        <li className="footlinknew"><a href="#">Contact us</a></li>
                        <li className="footlinknew"><a href="#">about us</a></li>
                        <li className="footlinknew"><a href="#">accomodation</a></li>
                        <li className="footlinknew"><a href="#">gallery</a></li>*/}
                        {
                          this.props.header.header.map((dynamicdata,i)=>
                            <li key={i} className="footlinknew">
                              <NavLink id={'navid' + i} to={{pathname: (dynamicdata.primary_link == 'Home' ? '/' : (dynamicdata.primary_link + '.html'))}}>{ReactHtmlParser(dynamicdata.primary_link)}</NavLink>
                            </li>
                          ) 
                        }
                      </ul>
                      <br/>
                    </div>
                    <div className="row socialmargin" style={{marginTop:'30px'}}>
                      <div className="col-sm-8">
                        {/*<div className="footsocial">
                          <a href="#"><i style={{color:'#fff',fontSize:'2em'}} className="fa fa-facebook-square" aria-hidden="true"></i></a>
                          <a href="#"><i style={{color:'#fff',fontSize:'2em',margin:'0% 2%'}} className="fa fa-instagram" aria-hidden="true"></i></a>
                          <a href="#"><i style={{color:'#fff',fontSize:'2em'}} className="fa fa-twitter-square" aria-hidden="true"></i></a>
                          <a href="#"><i style={{color:'#fff',fontSize:'2em',margin:'0% 2%'}} className="fa fa-google-plus-square" aria-hidden="true"></i></a>
                          <a href="#"><i style={{color:'#fff',fontSize:'2em'}} className="fa fa-youtube-square" aria-hidden="true"></i></a>
                        </div>*/}
                      </div>
                      <div className="col-sm-4">
                        <p style={{color:'#fff',fontSize:'1em'}}>* Subscribe for latest Updates and Offers.</p>
                        <div className="container-fluid" style={{border:'1px solid #fff',borderRadius:'5px'}}>
                          <div className="col-xs-11 col-sm-11">
                            <input id="emailinquire" className="emailinput form-control" type="text" placeholder="ENTER YOUR EMAIL" onChange={this.emailInquire}/>
                          </div>
                          <div className="col-xs-1 col-sm-1" style={{textAlign:'center',padding:'10px 0px'}}>
                            <i className="fa fa-angle-right" style={{color:'#fff',fontSize:'2em',cursor:'pointer'}} onClick={this.emailInquireSave}></i>
                          </div>
                          {/*<ToastContainer />*/}
                        </div>
                        <br/>
                        <div className="container-fluid">
                          {/*<p style={{color:'#fff',fontSize:'1.1em'}}> {this.state.emailInquiryError}</p>*/}
                        </div>
                      </div>
                    </div>
                    <br/>
                    <br/>
                    <div className="row mobileview footadd">
                      <p style={{color:'#fff',fontSize:'1.2em'}}>ADDRESS  : <br/>{this.props.home.admin.data.companyName + ' ,' + this.props.home.admin.data.address}  </p>
                      <p style={{color:'#fff',fontSize:'1.2em'}}><i className="fa fa-phone"></i> +91-{this.props.home.admin.data.reservationNo}</p>
                      <p style={{color:'#fff',fontSize:'1.2em'}}><i className="fa fa-envelope"></i> {this.props.header.admin.center_email}</p>
                    </div>
                  </div>
                </div>
                <div className="footstylesecond webview">
                  <div className="container-fluid">
                    <div className="col-sm-6">
                      <div className="footbrand">
                        <img  src={'https://res.cloudinary.com/' + this.props.home.admin.data.cloud_name + '/image/upload/h_100,w_219,c_fill/reputize/logo/' + this.props.home.admin.data.logo_img + '.png'}/>
                      </div>
                    </div>
                    <div className="col-sm-6 footadd">
                      <p style={{color:'#fff',fontSize:'1.2em'}}>ADDRESS  : <br/>{this.props.home.admin.data.companyName + ' ,' + this.props.home.admin.data.address} </p>
                      <p style={{color:'#fff',fontSize:'1.2em'}}><i className="fa fa-phone"></i> +91-{this.props.header.admin.reservationNo}</p>
                      <p style={{color:'#fff',fontSize:'1.2em'}}><i className="fa fa-envelope"></i> {this.props.header.admin.center_email}</p>
                    </div>
                  </div>
                </div>
              </div>
        );
    }

    render() {
        return (
            <div>
                {this.renderdom()}
            </div>
        );
    }

}

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
    return {
        header: state.header,
        home: state.home
    };
}

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
function matchDispatchToProps(dispatch){
    return bindActionCreators({headerData: headerData}, dispatch);
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(Footer);
