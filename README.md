# homework3

Assignment Three
Purpose
The purpose of this assignment is to protect the proxies using OAuth Authorization.
For this assignment, you will need to create two proxies. One will be used for the main flow of
requests and verify the correct credentials have been sent in. In order to accept OAuth access
tokens, you will need to create an additional proxy to create and revoke these tokens.
If invalid credentials are sent in, the flow should stop and a useful error should be returned to the
user. If the correct credentials are sent in, the proxy should make a callout to Github and return
information for a given user. The user will be passed in as a query parameter or header, your choice.
This request can be done through Apigee’s policies/flows or through a Node.js server, similar to
the one in assignment two.
Requirements<br>
• Create two proxies on Apigee, one to accept the request that is routed to Github and another
to create and revoke OAuth licenses.<br>
– The primary proxy should only accept GET requests.<br>
– The proxy should have two different URNs that only accept a given authorization
credential.<br>
<b> /oauth and hw3/oauth</b><br>
∗ /oauth should only accept OAuth Authorization access tokens.<br>
<b> Not sure on this one. I'm getting the token from the /oauth link by passing in the id and secret with
postman which is then chained and sent back to through oauth authorization to the /hw3/oauth link. </b><br>
• The response from Github should be some bit of information about a user, it can be their
repos, name, followers, etc. There’s a wide range to choose from, we’re just looking for a
successful response from Github.<br>
The response from Github doesn’t need to be manipulated in any way, just pass back to the
user.<br>
<b> Done. </b><br>
• If the user sends in an invalid authorization, return a helpful error message. Avoid using the
default error response from Apigee. 
<b> Despite adding oauth to my preflow any attmpts to enter fault info is still returning the github data.
I did change the default message in apigee and how to change the method errors in the .js but since I can't get apigee to reject anything I can't test failures.  </b><br>
• Include a small Postman project that can shows all the requirements have been met.
– This project should include valid requests, as well as requests that fail (sending an invalid
Basic Authorization header, etc.).<br>
<b> I have successful but I can't get a reject request. </b><br>
• Answer the following question:<br>
– Give one reason (there are many) OAuth tokens should not be granted in the main flow,
assuming the user has sent in the correct credentials.<br>
OAuths tokens should not be granted in the main flow because you want to ensure the user has the authorization access the data before sending any of it along. With asynchonous calls it can either hold up all data because the Oauth has not finished with the authorization or poetentially give the user information to which they shouldn't have access. 
