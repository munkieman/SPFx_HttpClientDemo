import * as React from 'react';
import styles from './SpFxHttpClientDemo.module.scss';
import { ISpFxHttpClientDemoProps } from './ISpFxHttpClientDemoProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class SpFxHttpClientDemo extends React.Component<ISpFxHttpClientDemoProps, {}> {
  
  private onGetListItemsClicked = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
  
    this.props.onGetListItems();
  }

  private onAddListItemClicked = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
  
    this.props.onAddListItem();
  }
  
  private onUpdateListItemClicked = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
  
    this.props.onUpdateListItem();
  }
  
  private onDeleteListItemClicked = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
  
    this.props.onDeleteListItem();
  }

  public render(): React.ReactElement<ISpFxHttpClientDemoProps> {
    const {
      description,
      spListItems,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName
    } = this.props;

    return (
      <section className={`${styles.spFxHttpClientDemo} ${hasTeamsContext ? styles.teams : ''}`}>
        <div className={styles.welcome}>
          <img alt="" src={isDarkTheme ? require('../assets/welcome-dark.png') : require('../assets/welcome-light.png')} className={styles.welcomeImage} />
          <h2>Well done, {escape(userDisplayName)}!</h2>
          <div>{environmentMessage}</div>
          <div>Web part property value: <strong>{escape(description)}</strong></div>
        </div>
        <div>
          <h3>Welcome to SharePoint Framework!</h3>
          <p>
            The SharePoint Framework (SPFx) is a extensibility model for Microsoft Viva, Microsoft Teams and SharePoint. It&#39;s the easiest way to extend Microsoft 365 with automatic Single Sign On, automatic hosting and industry standard tooling.
          </p>
          <h4>Learn more about SPFx development:</h4>
          <ul className={styles.links}>
            <li><a href="https://aka.ms/spfx" target="_blank" rel="noreferrer">SharePoint Framework Overview</a></li>
            <li><a href="https://aka.ms/spfx-yeoman-graph" target="_blank" rel="noreferrer">Use Microsoft Graph in your solution</a></li>
            <li><a href="https://aka.ms/spfx-yeoman-teams" target="_blank" rel="noreferrer">Build for Microsoft Teams using SharePoint Framework</a></li>
            <li><a href="https://aka.ms/spfx-yeoman-viva" target="_blank" rel="noreferrer">Build for Microsoft Viva Connections using SharePoint Framework</a></li>
            <li><a href="https://aka.ms/spfx-yeoman-store" target="_blank" rel="noreferrer">Publish SharePoint Framework applications to the marketplace</a></li>
            <li><a href="https://aka.ms/spfx-yeoman-api" target="_blank" rel="noreferrer">SharePoint Framework API reference</a></li>
            <li><a href="https://aka.ms/m365pnp" target="_blank" rel="noreferrer">Microsoft 365 Developer Community</a></li>
          </ul>
        </div>
        <div className={styles.buttons}>
          <button type="button" onClick={this.onGetListItemsClicked}>Get Countries</button>
          <button type="button" onClick={this.onAddListItemClicked}>Add List Item</button>
          <button type="button" onClick={this.onUpdateListItemClicked}>Update List Item</button>
          <button type="button" onClick={this.onDeleteListItemClicked}>Delete List Item</button>
        </div>      
        <ul>
          {spListItems && spListItems.map((list) =>
            <li key={list.Id}>
              <strong>Id:</strong> {list.Id}, <strong>Title:</strong> {list.Title}
            </li>
          )
          }
        </ul>      
      </section>
    );
  }
}
