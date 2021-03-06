import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SlideShow from 'react-slick';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import { WindowResizeListener } from 'react-window-resize-listener';
import ServiceData from './ServiceData';
import history from './history';


const StyledServicePage = styled.section`
  padding: 5px;
  padding-bottom: 25px;
  margin-top: -40px;

  h1 {
    text-align: left;
    padding-left: 5px;
  }
  p {
    font-size: 1.0em;
    text-align: left;  
  }
`;
const StyledSlideshow = styled(SlideShow)`
  margin: -20px 30px 0px 30px;
`;
const SlickSlide = styled.img`
  width: 97%;
`;
const StyledMain = styled.div`
  padding: 50px 5px 25px 5px;
  margin-top: -15px;
  text-align: left;

  div {
    text-align: left;
    margin-top: -15px;
    margin-bottom: -10px;
  }
`;
const StyledParagraph = styled.div`
  padding-bottom: 5px;
`;
const StyledListItem = styled.div`
  padding-bottom: 25px;
`;

const Arrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{...style, display: 'block', background: '#777', height: '60px', lineHeight: '80px' }}
      onClick={onClick}
    />
  );
};

class ServicePage extends React.Component {
  static gotoSection(section) {
    history.push(`/services/${section}`);
  }

  constructor(props) {
    super(props);

    this.serviceType = props.serviceType;
    this.serviceData = ServiceData.find((service) => { return service.pageName === this.serviceType; });

    this.settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      arrows: true,
      fade: false,
      autoplay: false,
      lazyLoad: false,
      swipe: true,
      swipeToSlide: false,
      prevArrow: <Arrow />,
      nextArrow: <Arrow />,
      responsive: [
        { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        { breakpoint: 1000, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      ],
    };
  }

  getSlides() {
    return this.serviceData.photos.map((photoPair) => {
      return photoPair.map((photoSrc) => {
        const imgSrc = `/images/before-and-after-pics/${photoSrc}`;
        return <div><SlickSlide src={imgSrc} alt="" /></div>;
      });
    });
  }

  getContent() {
    return this.serviceData.content.map((section, i) => {
      return (
        <Card
          key={`${section.title}`}
          initiallyExpanded={false}
          onExpandChange={() => { this.props.refresh(); }}
        >
          <CardHeader
            title={section.title}
            actAsExpander
            showExpandableButton
            titleStyle={{ fontSize: '1.2em', marginTop: '10px', padding: '3px 3px 10px 3px' }}
            style={{ backgroundColor: '#eee' }}
          />
          <CardText expandable >
            <div>
              {
                section.content.map((subsection, i) => {
                  /* render section as a list */
                  if (subsection.list !== undefined) {
                    return (
                      <div key={`${subsection.title}${i}`}>  
                        {
                          subsection.title !== '' &&
                            subsection.mainTitle === true ? <h4>{subsection.title}</h4> : <h5>{subsection.title}</h5>
                        }
                        <ul>
                          {
                            subsection.list.map((body) => {
                              return (
                                <StyledListItem key={body.substring(0, 30)}>
                                  <li>{body}</li>
                                </StyledListItem>
                              );
                            })
                          }
                        </ul>
                      </div>
                    );
                  }
                  // else render section as regular paragraphs
                  return (
                    <div key={`${subsection.title}${i}`}>  
                      {
                        subsection.title !== '' &&
                          subsection.mainTitle === true ? <h4>{subsection.title}</h4> : <h5>{subsection.title}</h5>
                      }
                      {
                        subsection.text.map((body) => {
                          return (
                            <StyledParagraph key={body.substring(0, 30)}>
                              <p>{body}</p>
                            </StyledParagraph>
                          );
                        })
                      }
                      {
                        // if it's the last text item in the array, leave a bottom spacer
                        (i + 1) >= section.content.length &&
                          <div style={{ paddingBottom: '30px' }} />
                      }
                    </div>
                  );
                })
              }
            </div>
          </CardText>
        </Card>
      );
    });
  }

  render() {
    return (
      <StyledServicePage>
        <h1>{this.serviceData.title}</h1>
        <StyledSlideshow {...this.settings}>
          {this.getSlides()}
        </StyledSlideshow>
        <StyledMain>
          <div>
            {this.getContent()}
          </div>
        </StyledMain>
        <RaisedButton label="Get Quote" secondary onClick={this.props.openChat} />
        <WindowResizeListener
          onResize={() => {
            this.props.refresh();
          }}
        />
      </StyledServicePage>
    );
  }
}

ServicePage.propTypes = {
  serviceType: PropTypes.string.isRequired,
  openChat: PropTypes.func.isRequired,
  refresh: PropTypes.func.isRequired,
};

export default ServicePage;
