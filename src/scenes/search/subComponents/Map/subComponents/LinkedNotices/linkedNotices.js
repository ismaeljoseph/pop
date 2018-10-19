import React from "react";
import Loader from "../../../../../../components/loader";
import { Link } from "react-router-dom";
import shave from 'shave';
import { bucket_url } from "../../../../../../config";
import "./linkedNotices.css";

const noImage = require("../../../../../../assets/noimage.png");
import SingleNotice from '../SingleNotice';

export default class LinkedNotices extends React.Component {
  state = {
    singleNotice: null
  };

  onBackClicked = ()=> {
    this.setState({ 
      singleNotice : null
    });
  }

  onSmallNoticeClicked = (item)=> {
    this.setState({ 
      singleNotice : (
        <div>
          <div onClick={this.onBackClicked} className='back'>&lt; retour à la liste</div>
          <SingleNotice className="" key={item.REF} data={item} />
        </div>
      )
    });
  }

  componentDidUpdate(prevProps) {
    if(this.props.links !== prevProps.links) {
      this.setState({ 
        singleNotice : null
      });
    }
  }

  render() {
    if (!this.props.links) {
      return <Loader />;
    }

    if (!this.props.links.length) {
      return <div />;
    }

    if(this.state.singleNotice) {
      return this.state.singleNotice;
    }

    const notices = this.props.links.map(notice => (
      <SmallNotice notice={notice} key={notice.REF} onClicked={this.onSmallNoticeClicked}/>
    ));
    return (
      <div className="sidebar-section links">
        <h6>Ce point est liée aux notices suivantes</h6>
        <div className="linked-notice-container">{notices}</div>
      </div>
    );
  }
}

class SmallNotice extends React.Component {
  constructor(props) {
      super(props);
      this.titleRef = React.createRef();
  }

  componentDidMount() {
      shave(this.titleRef.current, 50);
  }

  render() {
    let image = "";
    if (this.props.notice.MEMOIRE.length) {
      image = this.props.notice.MEMOIRE[0].url;
      if (!image.match(/^http/)) {
        image = `${bucket_url}${image}`;
      }
    } else {
      image = noImage;
    }
    //to={`/notice/${this.props.notice.collection}/${this.props.notice.REF}`}
    return (
      <div
        style={{ textDecoration: "none" }}
        className="card"
        onClick={ ()=> this.props.onClicked(this.props.notice)}
      >
        <img src={image} alt={this.props.notice.TICO} />
        <div className="content">
          <h2 ref={this.titleRef}>{this.props.notice.TICO}</h2>
          <p className="categories">{this.props.notice.DENO.join(", ")}</p>
          <div>
            <p>{this.props.notice.DOMN}</p>
            <p>{this.props.notice.AUTR}</p>
          </div>
        </div>
      </div>
    );
  }
}