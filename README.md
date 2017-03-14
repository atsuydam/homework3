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
Requirements
• Create two proxies on Apigee, one to accept the request that is routed to Github and another
to create and revoke OAuth licenses.
– The primary proxy should only accept GET requests.
– The proxy should have two different URNs that only accept a given authorization
credential.
<b> /oauth and hw3/getRelationships</b>
∗ /oauth should only accept OAuth Authorization access tokens.
<b> Not sure on this one. I'm getting the token from the /oauth link by passing in the id and secret with
postman which is then chained and sent back to through oauth authorization to the /hw3/getRelationships link,
or would be if the it worked. </b>
• The response from Github should be some bit of information about a user, it can be their
repos, name, followers, etc. There’s a wide range to choose from, we’re just looking for a
successful response from Github.
The response from Github doesn’t need to be manipulated in any way, just pass back to the
user.
<b> this is appearing in the console but not back to the user. The page times out. </b>
• If the user sends in an invalid authorization, return a helpful error message. Avoid using the
default error response from Apigee.
<b> can't see the error, it times out </b>
• Include a small Postman project that can shows all the requirements have been met.
– This project should include valid requests, as well as requests that fail (sending an invalid
Basic Authorization header, etc.).
<b> do to the time out issue I can't send in failed or successful requests to the second URN </b>
• Answer the following question:
– Give one reason (there are many) OAuth tokens should not be granted in the main flow,
assuming the user has sent in the correct credentials.
