import {
  ButtonClickedCallback,
  ICountryListItem
} from '../../../models';

export interface ISpFxHttpClientDemoProps {
  description: string;
  isDarkTheme: boolean;
  environmentMessage: string;
  hasTeamsContext: boolean;
  userDisplayName: string;
  spListItems: ICountryListItem[];
  onGetListItems?: ButtonClickedCallback;
  onAddListItem?: ButtonClickedCallback;
  onUpdateListItem?: ButtonClickedCallback;
  onDeleteListItem?: ButtonClickedCallback;
}