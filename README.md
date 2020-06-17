This is a simple React app (scaffolded using create-react-app) that allows users to query the Last.fm music database and explore the results.

Cloning or downloading this repo allows the app to be run locally via the command line. However, be advised that an API key for Last.fm is required to access the dataset.  (The key needs to be in a .env file containing the declaration REACT_APP_LAST_API_KEY:key_number_123456_or_whatever in the project's root directory.)

16 June 2020: It took me about three hours to get to the MVP.  The next logical thing to implement seemed to be testing.  I got some basic unit testing with Jest and Enzyme working OK...at present, however, I simply cannot get Jest to successfully mock any API requests. I suspect in a day or two the solution will be obvious--but right now I'm not seeing it.

Right now I am working on implementing Redux (on a separate branch called "redux.") Hopefully I will have that working in a day or two.

JG