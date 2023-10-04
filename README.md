# create-add-on-package-ui-helper-libraries-goswamianshuman

create-add-on-package-ui-helper-libraries-goswamianshuman created by GitHub Classroom

## Documentation for the ui helper library 🍉

### Preview of project 👀

This is a UI helper library UI helper to help developers implement authentication, realtime, and other Appwrite integrations with less code.

### Key Features covered in the project 🗝

- It is a ui library for the client platforms like react.
- It includes all the authentication methods used via appwrite
- unit tests created for rendering of the components

### Some Points to remember 💭

- The Output data can be recieved in the console.
- Working with React js makes the element library more reliable and efficient.

## Working with library 💪

### list of authentication elements :

> 1. CreateAccount
> 2. AnonymousSession
> 3. OauthTwoSession
> 4. PhoneSession
> 5. PhoneSessionConfirmation
> 6. MagicSession
> 7. MagicSessionConfirmation
> 8. EmailSession
> 9. getAccount
> 10. CreateJwt

### CreateAccount

- This method will allow the user to create a prebuild customizable form which helps to create account.
- Form contians entries as `name`, `email`, `password` plays an important role to take the data from the client.
- Some Common Attributes like `endpoint` and `projectId` will help to decide the element that for what project it must be functional

```sh
import {CreateAccount} from "@appwrite-octernship/create-add-on-package-ui-helper-libraries-goswamianshuman";

<CreateAccount endPoint="" projectId="" />

```

### AnonymousSession

- If some one wants to get a temprory access to the account for a limited ammount of time interval then anonymous session could be best option.
- The session has an expiration time of `one year`. If an account is created while an anonymous session is active, it will be attached to the existing anonymous session.
- Some Common Attributes like `endpoint` and `projectId` will help to decide the element that for what project it must be functional

```sh
import {AnonymousSession} from "@appwrite-octernship/create-add-on-package-ui-helper-libraries-goswamianshuman"

<AnonymousSession endPoint="" projectId="" />

```

### OauthTwoSession

- Appwrite also Provide a funcitionality to create account / session via social providers such as google, amazon, facebook, github and vice vers.
- OauthTwoSession element provides a functionality which directly allows user to click and create session.
- Oauth session consist of attributes other then endpoint and projectid which are as follows:

> 1. button_name
>
> > you can provide a name for the element by using this attribute.
>
> 2. providerName
>
> > ProviderName allows to set the the environment for whoes authentication service will be applicable
> >
> > List of Service Providers :
> >
> > 1. amazon
> > 2. apple
> > 3. auth0
> > 4. authentik
> > 5. autodesk
> > 6. bitbucket
> > 7. bitly
> > 8. box
> > 9. dailymotion
> > 10. discord
> > 11. disqus
> > 12. dropbox
> > 13. etsy
> > 14. facebook
> > 15. github
> > 16. gitlab
> > 17. google
> > 18. linkedin
> > 19. microsoft
> > 20. notion
> > 21. okta
> > 22. paypal
> > 23. paypalSandbox
> > 24. podio
> > 25. salesforce
> > 26. slack
> > 27. spotify
> > 28. stripe
> > 29. tradeshift
> > 30. tradeshiftBox
> > 31. twitch
> > 32. wordpress
> > 33. yahoo
> > 34. yammer
> > 35. yandex
> > 36. zoom
> >
>  3. Success Url
> >   URL to redirect back to your app after a successful Login Attempts.
> 
> 4. FailureUrl
> >  URL to redirect back to your app after a failed Login Attempt.

```sh
import {OauthTwoSession} from "@appwrite-octernship/create-add-on-package-ui-helper-libraries-goswamianshuman"

<OauthTwoSession endPoint="" projectId="" button_name="" ProviderName="" SuccessUrl="" FailureUrl=""  />
```

### PhoneSession

- The method uses the two-step authentication process.
- When using phone authentication, the authentication request is initiated from the client application and an SMS is sent to the user with a secret key for creating a session.
- PhoneSession commonly as two attributes `endpoint` and `projectId` will help to decide the element that for what project it must be functional
- you need to add your full mobile number with the country landmark for eg: Indian mobile number will be starting from +91 `(+91 XXXXX XXXXX)`

```sh
import {PhoneSession} from "@appwrite-octernship/create-add-on-package-ui-helper-libraries-goswamianshuman";

<PhoneSession endPoint="" projectId="" />

```

### PhoneSessionConfirmation

- The method can be called for the input of sms code for above session.
- PhoneSessionConfirmation commonly as two attributes `endpoint` and `projectId` will help to decide the element that for what project it must be functional
- enter the otp and confirm your selection to make a further move towards the phone session

```sh
import {PhoneSessionConfirmation} from "@appwrite-octernship/create-add-on-package-ui-helper-libraries-goswamianshuman";

<PhoneSessionConfirmation endPoint="" projectId="" />

```

### MagicSession

- Magic URL authentication allows a user to sign in without a password.
- sends the user an email with a secret key for creating a new session.
- If the provided user ID has not be registered, a new user will be created
- Attributes like `endpoint` and `projectId` will help to decide the element that for what project it must be functional

```sh
import {MagicSession} from "@appwrite-octernship/create-add-on-package-ui-helper-libraries-goswamianshuman";

<MagicSession endPoint="" projectId="" />

```

### MagicSessionConfirmation

- After receiving your secret from an email, you can create a new Magic URL session by calling this function and filling up the inputs.
- `endpoint` and `projectId` will decide the tracking of secret for the user who is logging in.

```sh
import {MagicSessionConfirmation} from "@appwrite-octernship/create-add-on-package-ui-helper-libraries-goswamianshuman";

<MagicSessionConfirmation endPoint="" projectId="" />

```

### EmailSession

- EmailSession is authentication allows user Logging in with an email and password is one of the most common ways to login into an application.

- Attributes like `endpoint` and `projectId` will help to decide the element that for what project it must be functional

```sh
import {EmailSession} from "@appwrite-octernship/create-add-on-package-ui-helper-libraries-goswamianshuman";

<EmailSession endPoint="" projectId="" />

```

### getAccount

- `getAccount()` is a function can be used to call after logging in the user and redirecting it on any other page.

- getAccount contains some attributes like `endpoint` and `projectId` which enables the function to identify the user.

```sh
import {getAccount} from "@appwrite-octernship/create-add-on-package-ui-helper-libraries-goswamianshuman";

getAccount(endPoint,projectId);

```

### JWT Authentication

- JSON Web Tokens (JWTs) are a secure means to transfer information or claims between two parties. If you're building server applications with Appwrite.
- JWTs enable your client applications to authenticate with your server application.
- You need to create a session using the Client SDKs before generating a JWT.
- The JWT will be a stateless proof of claim for the identity of the authenticated user and can be used by client or server SDKs to act on behalf of a user.
- JWTs become invalid after 15 minutes or when the session is deleted.
- some attributes like `endpoint` and `projectId` identify the project details.

```sh
import {CreateJwt} from "@appwrite-octernship/create-add-on-package-ui-helper-libraries-goswamianshuman";

CreateJwt(endPoint,projectId);

```

- after creating jwt key you can create a client which is a part of node.js:

```sh
const { Client } = require('node-appwrite');

const client = new Client();

client
    .setEndpoint(your_endpoint) // Your API Endpoint
    .setProject(your_projectid)                // Your project ID
    .setJWT(JWT_SECRET_KEY);         // Your secret JSON Web Token
```
