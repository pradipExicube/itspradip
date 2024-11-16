// RnFirebaseImplement.js

import React, {useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";

function CustomSpacer1(props) {
  return (
    <div style={{height:props?.height ? props?.height : 30}}></div>
  );
}

// function customCodeSnipet({Children}) {
const CustomCodeSnippet = ({ children }) => {
  return (
    <div style={{fontSize:'0.8rem',letterSpacing:0.5,marginTop:10,paddingTop:10,backgroundColor:'#f1f1f1',paddingLeft:10,paddingBottom:10}}>
      {children}
    </div>
    
  );
}

// function RnFirebaseImplement(props) {
	const RnFirebaseImplement = (props) => {
  const navigate = useNavigate();
  const location = useLocation(); // Access the state

  useEffect(() => {}, []);

  return (
    <>
      <div>
        <Container style={{ flex: 1, height: 400}}>
          <Row className="justify-content-center align-items-center">
            <Col xs={12} sm={11} md={10} lg={10} className="ml-auto" style={{}}>
              <div style={{fontSize:'2rem',letterSpacing:0.5,fontWeight:'600',marginTop:20}}>Integrating Firebase with React Native</div>
              <div style={{marginTop:20}}>
                <Card>
                  <Card.Img variant="top" src="https://i.postimg.cc/C17LsMwP/09513f00-daeb-11e9-83db-89ca99418153.png" style={{height:'20rem',objectFit:'cover'}} />
                </Card>
              </div>

              <div style={{fontSize:'1.8rem',letterSpacing:0.5,fontWeight:'600',marginTop:20}}>Integrating Firebase with React Native</div>
              <CustomSpacer1 />
              <div>
                <div style={{fontSize:'1.5rem',letterSpacing:0.5,fontWeight:'600',marginTop:20}}>What is Firebase?</div>
                <div style={{fontSize:'1rem',letterSpacing:0.5,marginTop:0}}>
                  Firebase is a platform developed by Google for creating mobile and web applications, it’s a Backend-as-a-Service (Baas). It provides developers with a variety of tools and services to help them develop quality apps, grows their user base, and earn profit. It is built on Google’s infrastructure.
                </div>
              </div>
              <CustomSpacer1 />
              <div>
                <div style={{fontSize:'1.5rem',letterSpacing:0.5,fontWeight:'600',marginTop:20}}>Structure of content:</div>
                <div style={{fontSize:'1rem',letterSpacing:0.5,marginTop:0,paddingTop:5}}> 1. Create a Firebase Project. </div>
                <div style={{fontSize:'1rem',letterSpacing:0.5,marginTop:0,paddingTop:5}}> 2. Create an SHA Key. </div>
                <div style={{fontSize:'1rem',letterSpacing:0.5,marginTop:0,paddingTop:5}}> 3. Install dependencies for Firebase. </div>
              </div>
              <CustomSpacer1 />
              <div>
                <div style={{fontSize:'1.5rem',letterSpacing:0.5,fontWeight:'600',marginTop:20}}>Step 1: Create a New Firebase Project</div>
                <div style={{fontSize:'1rem',letterSpacing:0.5,marginTop:0,paddingTop:5}}> To create Firebase projects, create an account on <span style={{textDecoration:'underline'}}>Firebase Console,</span> then select the Go to console option for the next steps: </div>
                <div style={{fontSize:'1rem',letterSpacing:0.5,marginTop:0,paddingTop:15}}> 1. <b>Add a Firebase Project:</b> The first time, Firebase will show a Create a Project option to set up a project. If there is already an existing project in the current account, select the Add Project option to create a new project: </div>
                <div style={{fontSize:'1rem',letterSpacing:0.5,marginTop:0,paddingTop:10}}> 2. <b>Add Name:</b> A project name can be anything but should be at least four characters long and should contain numbers, letters, spaces, and -!'" special characters only. Provide a name and click continue: </div>
                <div style={{fontSize:'1rem',letterSpacing:0.5,marginTop:0}}> Project names can be duplicates, but always use a unique name to avoid possible configuration issues. </div>
                <div style={{fontSize:'1rem',letterSpacing:0.5,marginTop:0,paddingTop:10}}> 3. <b>Create Project:</b> As of now, select the default account for analytics. Select the <b>Create project button.</b></div>
                <CustomCodeSnippet>
                <i>It might take a couple of minutes to create a project.</i>
                </CustomCodeSnippet>
              
              </div>
              <CustomSpacer1 />
              <div>
                <div style={{fontSize:'1.5rem',letterSpacing:0.5,fontWeight:'600',marginTop:20}}>Add Native Projects in Firebase Project</div>
                <div style={{fontSize:'1rem',letterSpacing:0.5,marginTop:0}}> Firebase supports mobile and web apps, so the platform-specific apps need to be added under the Firebase project and the native (Android and iOS) project files need to be configured:</div>
              </div>
              <CustomSpacer1 />
              <div>
                <div style={{fontSize:'1.5rem',letterSpacing:0.5,fontWeight:'600',marginTop:20}}>Setting Up an Android Firebase Project</div>
                <div style={{fontSize:'1rem',letterSpacing:0.5,marginTop:0,paddingTop:10}}> Select the <b>Android app</b> option in the Firebase project console and follow the steps to create and configure an Android project:</div>
                
                <CustomCodeSnippet>
                  <div>
                  Then you will navigate to another screen where we need to create <b>Add Firebase to your Android App.</b> For that we need to <b>Package Name.</b>
                  </div>
                  <div style={{paddingTop:10}}>
                  We can get the Package Name in <span style={{backgroundColor:'#f1f1f1',paddingTop:3,paddingBottom:3}}> &nbsp; “android/app/src/main/AndroidManifest.xml"  &nbsp;  </span></div>
                </CustomCodeSnippet>

                <div style={{fontSize:'1rem',letterSpacing:0.5,marginTop:0,paddingTop:30}}> 
                <b>Add Package:</b> A package name is required to create an Android project. It’s a unique identifier of an Android app. The package name is used to identify an app on the Play Store and device, so it must be a unique value.
                </div>
                <CustomCodeSnippet>
                  Add the package name in the Android package name field and provide a nickname to register the Android app.
                </CustomCodeSnippet>
                <div style={{fontSize:'1rem',letterSpacing:0.5,marginTop:0,paddingTop:30}}> 
                2. <b>Add Configuration File:</b> Download the <span style={{padding:3,backgroundColor:'#f1f1f1',paddingBottom:5}}>google-services.json</span> file, then copy and paste the file in <span style={{padding:3,backgroundColor:'#f1f1f1',paddingBottom:5}}>android/app</span> folder.
                </div>
                <div style={{fontSize:'1rem',letterSpacing:0.5,marginTop:0,paddingTop:30}}> 
                3. <b>Configure Google Services:</b> Firebase configurations require <b>google-services</b> plugins to build the project, so add the <b>google-services</b> dependency in the <b>android/build.gradle</b> file:
                </div>

                <CustomCodeSnippet>
                  Add the <b>google-services</b> dependency in the project file — <b>“android/build.gradle"</b> and paste it. Look Like this…
                </CustomCodeSnippet>

                <div style={{fontSize:'1rem',letterSpacing:0.5,marginTop:0,paddingTop:40}}> 
                There is no need to add any other Firebase SDK dependency for Android. If you’ve opted for Google Analytics, it should also be added as an NPM module dependency, not as a <b>gradle</b> dependency.
                <br/>
                
                </div>
                <CustomCodeSnippet>
                Then Add the google-services plugin in the “android/app/build.gradle"
                </CustomCodeSnippet>



                <div style={{fontSize:'1rem',letterSpacing:0.5,marginTop:0,paddingTop:30}}> 
                4. <b>Verify App:</b> Run the Android project to confirm the successful integration with Firebase: 
                </div>
                
                <CustomCodeSnippet>
                Yay! <b>Step: 1 completed</b> and your app will be <b>Added Successfully.</b> Then <b>Continue to console</b> and here we go next Step.
                </CustomCodeSnippet>
                
              </div>
              <CustomSpacer1 />
              <div>
                <div style={{fontSize:'1.5rem',letterSpacing:0.5,fontWeight:'600',marginTop:20}}>Step 2: Create an SHA Key</div>
                <div style={{fontSize:'1rem',letterSpacing:0.5,marginTop:0}}>1. Thereafter we need to get a command for creating an <b>SHA Key :</b></div>
                <div style={{fontSize:'0.8rem',letterSpacing:0.5,marginTop:10,paddingTop:10,backgroundColor:'#f1f1f1',paddingLeft:10,paddingBottom:10}}>
                  keytool -list -v -keystore debug.keystore -alias androiddebugkey -storepass android -keypass android
                </div>

                <div style={{fontSize:'1rem',letterSpacing:0.5,marginTop:20}}>
                2. Then this command you need to paste in <b>Command Prompt.</b> You need to give the Alias Name: <b>androiddebugkey</b> and Press Enter thereafter, the key will automatically generate. Look like this…
                </div>
                <div style={{fontSize:'1rem',letterSpacing:0.5,marginTop:20}}>
                3. Whenever it is done you need to copy this SHA key and paste it into your Firebase project. Follow some steps:
                </div>

                <div style={{fontSize:'1rem',letterSpacing:0.5,marginTop:20}}>
                  <div style={{paddingLeft:10}}>
                    <div style={{paddingTop:10}}>* Go to your <b>Firebase Project Dashboard.</b></div>
                    <div style={{paddingTop:10}}>* Click on the <b>Setting icon</b> on the left-hand side.</div>
                    <div style={{paddingTop:10}}>* Click on <b>Project Setting.</b></div>
                    <div style={{paddingTop:10}}>* Then scroll down to see <b>SDK setup and configuration.</b></div>
                    <div style={{paddingTop:10}}>* Click <b>Add fingerprint</b> then paste it SHA1 Key.</div>
                    <div style={{paddingTop:10}}>* Last, Click on the <b>Save Button.</b></div>
                  </div>
                </div>

                <div style={{fontSize:'1rem',letterSpacing:0.5,marginTop:20}}>
                4. Next you need to <b>Set up the sign-in method.</b> You have to see it on the left-hand side option <b>Authentication.</b> Click on <b>Authentication</b> and Go to <b>Sign-in methods.</b> Here you have to see some <b>Sign-in providers</b> after that you need to click on <b>Google.</b> Look like this…
                </div>

                <div style={{fontSize:'1rem',letterSpacing:0.5,marginTop:20}}>
                5. You need to <b>enable Google Authentication.</b> Then you need to give your <b>Email ID</b> and Click on <b>Save Button.</b>
                </div>
                
                <div style={{fontSize:'1rem',letterSpacing:0.5,marginTop:20}}>
                6. Then again, Download the <b>google-services.json</b> file, then copy and paste the file and replace it in <b>android/app</b> folder.
                </div>
              </div>

              <CustomSpacer1 />
              <div>
                <div style={{fontSize:'1.5rem',letterSpacing:0.5,fontWeight:'600',marginTop:20}}>Step 3: Install dependencies for Firebase.</div>
              </div>

              <div>
                <div style={{fontSize:'1.2rem',letterSpacing:0.5,fontWeight:'600',marginTop:20}}>Installation:</div>
                <div style={{fontSize:'1rem',letterSpacing:0.5,marginTop:0,paddingTop:5}}> Installing React Native Firebase requires a few steps; installing the NPM module, adding the Firebase config files & rebuilding your application.</div>
              </div>
              <CustomSpacer1 />
              <div>
                <div style={{fontSize:'1.2rem',letterSpacing:0.5,fontWeight:'600',marginTop:20}}>1. Library Installing</div>
                <div style={{fontSize:'1rem',letterSpacing:0.5,marginTop:0,paddingTop:5}}> 
                The <b style={{textDecorationLine:'underline'}}>@react-native-firebase/app</b> the module must be installed before using any other Firebase service.
                </div>
                <CustomCodeSnippet>
                  <div>
                    <div style={{color:'#afafaf'}}><i># Using npm</i></div>
                    <div>npm install --save @react-native-firebase/app</div>
                  </div>
                  <div>
                    <div style={{color:'#afafaf'}}><i># Using Yarn</i></div>
                    <div>yarn add @react-native-firebase/app</div>
                  </div>
                  </CustomCodeSnippet>
              </div>
              <CustomSpacer1 />
              <div>
                <div style={{fontSize:'1.2rem',letterSpacing:0.5,fontWeight:'600',marginTop:20}}>2. Android Setup</div>
                <div style={{fontSize:'1rem',letterSpacing:0.5,marginTop:0,paddingTop:5}}> 
                To allow the Android app to connect to your Firebase project securely, a configuration file must be downloaded and added to your project.
                </div>
                
                <div style={{fontSize:'0.8rem',letterSpacing:0.5,marginTop:0,paddingTop:20}}> 
                First, add the <b>google-services</b> plugin as a dependency inside of your <b>/android/build.gradle</b> file:
                </div>

                {/* <div style={{fontSize:'0.8rem',letterSpacing:0.5,marginTop:10,paddingTop:10,backgroundColor:'#f1f1f1',paddingLeft:10,paddingBottom:10}}> */}
                <CustomCodeSnippet>
                  <div>
                    <div>{`buildscript {`}</div>
                    <div style={{paddingLeft:10}}>{`dependencies {`}</div>
                    <div style={{paddingLeft:20,color:'#afafaf'}}>{`// ... other dependencies`}</div>
                    <div style={{paddingLeft:20}}>{`classpath 'com.google.gms:google-services:4.3.13'`}</div>
                    <div style={{paddingLeft:20,color:'#afafaf'}}>{`// Add me --- /\ `}</div>
                    <div style={{paddingLeft:10}}>{`}`}</div>
                    <div>{`}`}</div>
                  </div>
                  </CustomCodeSnippet>
                {/* </div> */}

                <div style={{fontSize:'0.8rem',letterSpacing:0.5,marginTop:0,paddingTop:10,paddingBottom:10}}> 
                Lastly, execute the plugin by adding the following to your <b>/android/app/build.gradle</b> file:
                </div>

                <CustomCodeSnippet>
                  <div>
                    <div>{`apply plugin: 'com.android.application'`}</div>
                    <div>{`apply plugin: 'com.google.gms.google-services'`} &nbsp; &nbsp;<span style={{color:'#afafaf'}}>{`// <- Add this line`}</span></div>
                  </div>
                </CustomCodeSnippet>

                <div style={{fontSize:'1rem',letterSpacing:0.5,marginTop:0,marginTop:20}}> 
                To allow the Android app to connect to your Firebase project securely, a configuration file must be downloaded and added to your project.
                </div>

                <div style={{fontSize:'1rem',letterSpacing:0.5,marginTop:20,paddingTop:20,paddingBottom:20,backgroundColor:'#eaffe4',paddingLeft:10,paddingRight:10}}>
                  <div>
                    <div>
                    <b>Congrats!</b> 🙌 🎉 you have successfully implemented Firebase for your react native project. For further information please contact me - 
                    </div>
                    <div>
                    <b style={{}}>pradipm.info@gmail.com</b>
                    </div>
                  </div>
                </div>

              </div>
              <CustomSpacer1 />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default RnFirebaseImplement;
