import React from 'react';
import { Footer } from 'widgets/footer';
import { Navbar } from 'widgets/navbar';

interface IPageContainerProps {
  headerText: string;
  content?: React.ReactNode;
}

export default class PageContainer extends React.Component<IPageContainerProps> {
  render(): React.ReactNode {
    return (
      <>
        <Navbar headerText={this.props.headerText} />
        {this.props.content}
        <Footer />
      </>
    );
  }
}
