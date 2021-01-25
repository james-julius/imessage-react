import {ADD_MESSAGE, BLANK_MESSAGE, CLEAR_HISTORY} from "../../actions/messages";

export const initialState = [
  {
    id: 0,
    isMe: false,
    text: "How has isolation impacted your creativity?",
  },
  {
    id: 1,
    isMe: true,
    text:
      "at first it was horrifying to be honest. i knew the only thing i could technically do music wise was write and that pressure freaked me out at first. then i started experimented with some songwriters and producers i hadn’t worked with before and started to actually write my favorite stuff yet. there’s something really special about getting on facetime with a stranger and writing a song from your bed. the rest of the band and i luckily had some time to write together in a studio before quarantine which i’m so grateful for. hopefully we’ll be able to do more of that soon!!",
  },
  {
    id: 2,
    isMe: false,
    text:
      "As a musician, what has been the most challenging part of this experience?",
  },
  {
    id: 3,
    isMe: true,
    text:
      "i think fully realizing the importance of touring and live shows and not knowing when we’ll get to go back. i’ve always loved playing live so much but there’s a lot of sacrifice that comes along with it. it can be hard to miss it and fully appreciate it when you’re going out on the road so often. but now i can’t even explain how much I miss playing shows and looking into the eyes of someone screaming lyrics back at me about some weird fucked up time in my life. it’s just such an incredibly therapeutic act for me and I think all of us so it’s really difficult adjusting to life without that connection.",
  },
].reverse();

const messages = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return [
        {
          id: action.id,
          isMe: action.isMe,
          text: action.text
        },
        ...state
      ];
    case BLANK_MESSAGE:
      return state;
    case CLEAR_HISTORY:
      return [];
    default:
      return state;
  }
};

export default messages
