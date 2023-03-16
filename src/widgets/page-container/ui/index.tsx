import React from 'react';
import { TypeRoute } from 'shared/types';
import { Footer } from 'widgets/footer';
import { Navbar } from 'widgets/navbar';

type TypePageContainerProps = {
  headerText: string;
  content: React.ReactNode;
  routes: TypeRoute[];
};

export default class PageContainer extends React.Component<TypePageContainerProps> {
  render(): React.ReactNode {
    const { routes, headerText, content } = this.props;

    return (
      <>
        <Navbar routes={routes} headerText={headerText} />
        {content}
        <Footer />
      </>
    );
  }
}
