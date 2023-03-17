import { Component, ReactNode } from 'react';
import { TypeRoute } from 'shared/types';
import { Footer } from 'widgets/footer';
import { Navbar } from 'widgets/navbar';

type TypePageContainerProps = {
  headerText: string;
  content: ReactNode;
  routes: TypeRoute[];
};

export default class PageContainer extends Component<TypePageContainerProps> {
  render(): ReactNode {
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
