import { NavBar } from 'components/NavBar';
import React from 'react';

interface IPageContainerProps {
  headerText: string;
  content?: React.ReactNode;
}

export class PageContainer extends React.Component<IPageContainerProps> {
  render(): React.ReactNode {
    return (
      <>
        <NavBar headerText={this.props.headerText} />
        {this.props.content}
      </>
    );
  }
}
