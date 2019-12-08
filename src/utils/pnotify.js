import PNotify from '../../node_modules/pnotify/dist/es/PNotify.js';
// import PNotifyButtons from '../../node_modules/pnotify/dist/es/PNotifyButtons.js';
import PNotifyStyleMaterial from '../../node_modules/pnotify/dist/es/PNotifyStyleMaterial.js';

import { messages } from './messages';

// // Set default styling.
PNotify.defaults.styling = 'material';
// // This icon setting requires the Material Icons font. (See below.)
PNotify.defaults.icons = 'material';

const messageNeedInput = () => PNotify.info(messages.needInput);
const messageBadInput = () => PNotify.error(messages.badInput);
const noCountriesFound = () => PNotify.error(messages.noItem);
const messageTakeResult = () => PNotify.success(messages.success);

// function allertMessage(message) {
//   PNotify.alert(message);
// }

export {
  messageNeedInput,
  messageBadInput,
  noCountriesFound,
  messageTakeResult,
};
