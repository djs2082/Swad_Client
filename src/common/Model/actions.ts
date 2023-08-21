import { SessionDataType } from 'common/types';
import ADD_SESSION_DATA_TO_STORE from 'common/Model/constants';

const addSessionDataToStoreAction = (payload: SessionDataType) => ({
  type: ADD_SESSION_DATA_TO_STORE,
  payload,
});

export default addSessionDataToStoreAction;
