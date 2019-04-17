import React from 'react';
import { Header, Container } from 'semantic-ui-react';

import Heading from './Heading';
import Footer from './Footer';

class About extends React.Component {
  render() {
    return (
      <div>
        <Heading page="about" />
        <Container text style={{ marginTop: "4em", marginBottom: '4em' }}>
          <Header as="h1">About</Header>

          <p><strong>Joy Swimming Inc</strong> is a standard and well-equipped chlorinated 25 yards indoor swimming pool located in the heart of the rockaway’s towns. Our main goal on setting this business is with the aim to engage and encourage parents and as well kids to participate in sport activity since one’s promotes health, can help keep a healthy lifestyle, self-therapy, stress reliver, , fitness, fun, socialization and most of all learn a life saving skill that one day could save their own life or some else’s life. As well teach adults and kids how to defend and handle difficult situations in deep waters by providing the necessaries skills from fundamentals to high-level techniques.</p>
          <p>After conducting numerous studies and researches of the area we have decided that the Rockway’s town is what we have been looking for to start our small business and settle our swimming facility. A pool facility easy to access with public transportation within 2 blocks from its current location. Excessive amount of parking to accommodate any number of customers. We believe Joy Swimming Inc will be the leading swimming facility in the Rockaways town and we will work hard and try our best to provide the best services and be able to satisfy our customer needs by providing them with flexible swimming schedules. In fact, our major target is to motivative family and commuters to participate more in sports activities.</p>
        
          <p><strong>Joy Swimming Inc</strong> will be opened Monday-Thursday from 8AM-6PM weekends (Fridays to Sundays) and from 7:00 am to 6:00 pm to offer the most flexibles schedule and for us to be able to accommodate customer with different time preference also to recruit enough staff to run shift among our workforce. We will go out of our way to acquire standard equipment and other customers’ needs or requests to keep them happy and be able to provide a healthier environment.</p>
          <p><strong>Joy Swimming Inc</strong> will be a family owned business, the business will be managed by Elvis Salcedo & Nikki Kwok, with a well over 8 years of experienced swimming instructors and 7 years in pool management in the United States.</p>
        </Container>

        <Footer />
      </div>
    );
  }
}

export default About;