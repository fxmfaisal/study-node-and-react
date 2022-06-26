import React from "react";
import { Link } from 'react-router-dom';
import { scriptLoaderSync } from "../../helpers/script-loader";

export default class Dashboard extends React.Component {

  scriptLoaded = false;

  componentDidMount() {
    if (!this.scriptLoaded && (this.scriptLoaded = true)) {
      scriptLoaderSync([
        '/assets/javascripts/theme.js',
        '/assets/javascripts/theme.init.js',
        '/assets/javascripts/dashboard/examples.dashboard.js'
      ]);
    }
  }

  render() {
    return <>
      <section className="body">
        <header className="header">
          <div className="logo-container">
            <a href="/" className="logo">
              <img src="assets/images/logo.png" height={35} alt="JSOFT Admin" />
            </a>
            <div
              className="visible-xs toggle-sidebar-left"
              data-toggle-classname="sidebar-left-opened"
              data-target="html"
              data-fire-event="sidebar-left-opened"
            >
              <i className="fa fa-bars" aria-label="Toggle sidebar" />
            </div>
          </div>
          <div className="header-right">
            <form action="pages-search-results.html" className="search nav-form">
              <div className="input-group input-search">
                <input
                  type="text"
                  className="form-control"
                  name="q"
                  id="q"
                  placeholder="Search..."
                />
                <span className="input-group-btn">
                  <button className="btn btn-default" type="submit">
                    <i className="fa fa-search" />
                  </button>
                </span>
              </div>
            </form>
            <span className="separator" />
            <ul className="notifications">
              <li>
                <a
                  href="#"
                  className="dropdown-toggle notification-icon"
                  data-toggle="dropdown"
                >
                  <i className="fa fa-tasks" />
                  <span className="badge">3</span>
                </a>
                <div className="dropdown-menu notification-menu large">
                  <div className="notification-title">
                    <span className="pull-right label label-default">3</span>
                    Tasks
                  </div>
                  <div className="content">
                    <ul>
                      <li>
                        <p className="clearfix mb-xs">
                          <span className="message pull-left">
                            Generating Sales Report
                          </span>
                          <span className="message pull-right text-dark">60%</span>
                        </p>
                        <div className="progress progress-xs light">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow={60}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            style={{ width: "60%" }}
                          />
                        </div>
                      </li>
                      <li>
                        <p className="clearfix mb-xs">
                          <span className="message pull-left">
                            Importing Contacts
                          </span>
                          <span className="message pull-right text-dark">98%</span>
                        </p>
                        <div className="progress progress-xs light">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow={98}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            style={{ width: "98%" }}
                          />
                        </div>
                      </li>
                      <li>
                        <p className="clearfix mb-xs">
                          <span className="message pull-left">
                            Uploading something big
                          </span>
                          <span className="message pull-right text-dark">33%</span>
                        </p>
                        <div className="progress progress-xs light mb-xs">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow={33}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            style={{ width: "33%" }}
                          />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <a
                  href="#"
                  className="dropdown-toggle notification-icon"
                  data-toggle="dropdown"
                >
                  <i className="fa fa-envelope" />
                  <span className="badge">4</span>
                </a>
                <div className="dropdown-menu notification-menu">
                  <div className="notification-title">
                    <span className="pull-right label label-default">230</span>
                    Messages
                  </div>
                  <div className="content">
                    <ul>
                      <li>
                        <a href="#" className="clearfix">
                          <figure className="image">
                            <img
                              src="assets/images/!sample-user.jpg"
                              alt="Joseph Doe Junior"
                              className="img-circle"
                            />
                          </figure>
                          <span className="title">Joseph Doe</span>
                          <span className="message">Lorem ipsum dolor sit.</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="clearfix">
                          <figure className="image">
                            <img
                              src="assets/images/!sample-user.jpg"
                              alt="Joseph Junior"
                              className="img-circle"
                            />
                          </figure>
                          <span className="title">Joseph Junior</span>
                          <span className="message truncate">
                            Truncated message. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Donec sit amet lacinia orci. Proin
                            vestibulum eget risus non luctus. Nunc cursus lacinia
                            lacinia. Nulla molestie malesuada est ac tincidunt.
                            Quisque eget convallis diam, nec venenatis risus.
                            Vestibulum blandit faucibus est et malesuada. Sed interdum
                            cursus dui nec venenatis. Pellentesque non nisi lobortis,
                            rutrum eros ut, convallis nisi. Sed tellus turpis,
                            dignissim sit amet tristique quis, pretium id est. Sed
                            aliquam diam diam, sit amet faucibus tellus ultricies eu.
                            Aliquam lacinia nibh a metus bibendum, eu commodo eros
                            commodo. Sed commodo molestie elit, a molestie lacus
                            porttitor id. Donec facilisis varius sapien, ac fringilla
                            velit porttitor et. Nam tincidunt gravida dui, sed
                            pharetra odio pharetra nec. Duis consectetur venenatis
                            pharetra. Vestibulum egestas nisi quis elementum
                            elementum.
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="clearfix">
                          <figure className="image">
                            <img
                              src="assets/images/!sample-user.jpg"
                              alt="Joe Junior"
                              className="img-circle"
                            />
                          </figure>
                          <span className="title">Joe Junior</span>
                          <span className="message">Lorem ipsum dolor sit.</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="clearfix">
                          <figure className="image">
                            <img
                              src="assets/images/!sample-user.jpg"
                              alt="Joseph Junior"
                              className="img-circle"
                            />
                          </figure>
                          <span className="title">Joseph Junior</span>
                          <span className="message">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Donec sit amet lacinia orci. Proin vestibulum eget risus
                            non luctus. Nunc cursus lacinia lacinia. Nulla molestie
                            malesuada est ac tincidunt. Quisque eget convallis diam.
                          </span>
                        </a>
                      </li>
                    </ul>
                    <hr />
                    <div className="text-right">
                      <a href="#" className="view-more">
                        View All
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <a
                  href="#"
                  className="dropdown-toggle notification-icon"
                  data-toggle="dropdown"
                >
                  <i className="fa fa-bell" />
                  <span className="badge">3</span>
                </a>
                <div className="dropdown-menu notification-menu">
                  <div className="notification-title">
                    <span className="pull-right label label-default">3</span>
                    Alerts
                  </div>
                  <div className="content">
                    <ul>
                      <li>
                        <a href="#" className="clearfix">
                          <div className="image">
                            <i className="fa fa-thumbs-down bg-danger" />
                          </div>
                          <span className="title">Server is Down!</span>
                          <span className="message">Just now</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="clearfix">
                          <div className="image">
                            <i className="fa fa-lock bg-warning" />
                          </div>
                          <span className="title">User Locked</span>
                          <span className="message">15 minutes ago</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="clearfix">
                          <div className="image">
                            <i className="fa fa-signal bg-success" />
                          </div>
                          <span className="title">Connection Restaured</span>
                          <span className="message">10/10/2014</span>
                        </a>
                      </li>
                    </ul>
                    <hr />
                    <div className="text-right">
                      <a href="#" className="view-more">
                        View All
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <span className="separator" />
            <div id="userbox" className="userbox">
              <a href="#" data-toggle="dropdown">
                <figure className="profile-picture">
                  <img
                    src="assets/images/!logged-user.jpg"
                    alt="Joseph Doe"
                    className="img-circle"
                    data-lock-picture="assets/images/!logged-user.jpg"
                  />
                </figure>
                <div
                  className="profile-info"
                  data-lock-name="John Doe"
                  data-lock-email="johndoe@JSOFT.com"
                >
                  <span className="name">John Doe Junior</span>
                  <span className="role">administrator</span>
                </div>
                <i className="fa custom-caret" />
              </a>
              <div className="dropdown-menu">
                <ul className="list-unstyled">
                  <li className="divider" />
                  <li>
                    <a role="menuitem" tabIndex={-1} href="pages-user-profile.html">
                      <i className="fa fa-user" /> My Profile
                    </a>
                  </li>
                  <li>
                    <a role="menuitem" tabIndex={-1} href="#" data-lock-screen="true">
                      <i className="fa fa-lock" /> Lock Screen
                    </a>
                  </li>
                  <li>
                    <a role="menuitem" tabIndex={-1} href="pages-signin.html">
                      <i className="fa fa-power-off" /> Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
        <div className="inner-wrapper">
          <aside id="sidebar-left" className="sidebar-left">
            <div className="sidebar-header">
              <div className="sidebar-title">Navigation</div>
              <div
                className="sidebar-toggle hidden-xs"
                data-toggle-classname="sidebar-left-collapsed"
                data-target="html"
                data-fire-event="sidebar-left-toggle"
              >
                <i className="fa fa-bars" aria-label="Toggle sidebar" />
              </div>
            </div>
            <div className="nano">
              <div className="nano-content">
                <nav id="menu" className="nav-main" role="navigation">
                  <ul className="nav nav-main">
                    <li className="nav-active">
                      <a href="index.html">
                        <i className="fa fa-home" aria-hidden="true" />
                        <span>Dashboard</span>
                      </a>
                    </li>
                    <li>
                      <a href="mailbox-folder.html">
                        <span className="pull-right label label-primary">182</span>
                        <i className="fa fa-envelope" aria-hidden="true" />
                        <span>Mailbox</span>
                      </a>
                    </li>
                    <li className="nav-parent">
                      <a>
                        <i className="fa fa-copy" aria-hidden="true" />
                        <span>Pages</span>
                      </a>
                      <ul className="nav nav-children">
                        <li>
                          <a href="pages-signup.html">Sign Up</a>
                        </li>
                        <li>
                          <a href="pages-signin.html">Sign In</a>
                        </li>
                        <li>
                          <a href="pages-recover-password.html">Recover Password</a>
                        </li>
                        <li>
                          <a href="pages-lock-screen.html">Locked Screen</a>
                        </li>
                        <li>
                          <a href="pages-user-profile.html">User Profile</a>
                        </li>
                        <li>
                          <a href="pages-session-timeout.html">Session Timeout</a>
                        </li>
                        <li>
                          <a href="pages-calendar.html">Calendar</a>
                        </li>
                        <li>
                          <a href="pages-timeline.html">Timeline</a>
                        </li>
                        <li>
                          <a href="pages-media-gallery.html">Media Gallery</a>
                        </li>
                        <li>
                          <a href="pages-invoice.html">Invoice</a>
                        </li>
                        <li>
                          <a href="pages-blank.html">Blank Page</a>
                        </li>
                        <li>
                          <a href="pages-404.html">404</a>
                        </li>
                        <li>
                          <a href="pages-500.html">500</a>
                        </li>
                        <li>
                          <a href="pages-log-viewer.html">Log Viewer</a>
                        </li>
                        <li>
                          <a href="pages-search-results.html">Search Results</a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-parent">
                      <a>
                        <i className="fa fa-tasks" aria-hidden="true" />
                        <span>UI Elements</span>
                      </a>
                      <ul className="nav nav-children">
                        <li>
                          <a href="ui-elements-typography.html">Typography</a>
                        </li>
                        <li>
                          <a href="ui-elements-icons.html">Icons</a>
                        </li>
                        <li>
                          <a href="ui-elements-tabs.html">Tabs</a>
                        </li>
                        <li>
                          <a href="ui-elements-panels.html">Panels</a>
                        </li>
                        <li>
                          <a href="ui-elements-widgets.html">Widgets</a>
                        </li>
                        <li>
                          <a href="ui-elements-portlets.html">Portlets</a>
                        </li>
                        <li>
                          <a href="ui-elements-buttons.html">Buttons</a>
                        </li>
                        <li>
                          <a href="ui-elements-alerts.html">Alerts</a>
                        </li>
                        <li>
                          <a href="ui-elements-notifications.html">Notifications</a>
                        </li>
                        <li>
                          <a href="ui-elements-modals.html">Modals</a>
                        </li>
                        <li>
                          <a href="ui-elements-lightbox.html">Lightbox</a>
                        </li>
                        <li>
                          <a href="ui-elements-progressbars.html">Progress Bars</a>
                        </li>
                        <li>
                          <a href="ui-elements-sliders.html">Sliders</a>
                        </li>
                        <li>
                          <a href="ui-elements-carousels.html">Carousels</a>
                        </li>
                        <li>
                          <a href="ui-elements-accordions.html">Accordions</a>
                        </li>
                        <li>
                          <a href="ui-elements-nestable.html">Nestable</a>
                        </li>
                        <li>
                          <a href="ui-elements-tree-view.html">Tree View</a>
                        </li>
                        <li>
                          <a href="ui-elements-grid-system.html">Grid System</a>
                        </li>
                        <li>
                          <a href="ui-elements-charts.html">Charts</a>
                        </li>
                        <li>
                          <a href="ui-elements-animations.html">Animations</a>
                        </li>
                        <li>
                          <a href="ui-elements-extra.html">Extra</a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-parent">
                      <a>
                        <i className="fa fa-list-alt" aria-hidden="true" />
                        <span>Forms</span>
                      </a>
                      <ul className="nav nav-children">
                        <li>
                          <a href="forms-basic.html">Basic</a>
                        </li>
                        <li>
                          <a href="forms-advanced.html">Advanced</a>
                        </li>
                        <li>
                          <a href="forms-validation.html">Validation</a>
                        </li>
                        <li>
                          <a href="forms-layouts.html">Layouts</a>
                        </li>
                        <li>
                          <a href="forms-wizard.html">Wizard</a>
                        </li>
                        <li>
                          <a href="forms-code-editor.html">Code Editor</a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-parent">
                      <a>
                        <i className="fa fa-table" aria-hidden="true" />
                        <span>Tables</span>
                      </a>
                      <ul className="nav nav-children">
                        <li>
                          <a href="tables-basic.html">Basic</a>
                        </li>
                        <li>
                          <a href="tables-advanced.html">Advanced</a>
                        </li>
                        <li>
                          <a href="tables-responsive.html">Responsive</a>
                        </li>
                        <li>
                          <a href="tables-editable.html">Editable</a>
                        </li>
                        <li>
                          <a href="tables-ajax.html">Ajax</a>
                        </li>
                        <li>
                          <a href="tables-pricing.html">Pricing</a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-parent">
                      <a>
                        <i className="fa fa-map-marker" aria-hidden="true" />
                        <span>Maps</span>
                      </a>
                      <ul className="nav nav-children">
                        <li>
                          <a href="maps-google-maps.html">Basic</a>
                        </li>
                        <li>
                          <a href="maps-google-maps-builder.html">Map Builder</a>
                        </li>
                        <li>
                          <a href="maps-vector.html">Vector</a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-parent">
                      <a>
                        <i className="fa fa-columns" aria-hidden="true" />
                        <span>Layouts</span>
                      </a>
                      <ul className="nav nav-children">
                        <li>
                          <a href="layouts-default.html">Default</a>
                        </li>
                        <li>
                          <a href="layouts-boxed.html">Boxed</a>
                        </li>
                        <li>
                          <a href="layouts-menu-collapsed.html">Menu Collapsed</a>
                        </li>
                        <li>
                          <a href="layouts-scroll.html">Scroll</a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-parent">
                      <a>
                        <i className="fa fa-align-left" aria-hidden="true" />
                        <span>Menu Levels</span>
                      </a>
                      <ul className="nav nav-children">
                        <li>
                          <a>First Level</a>
                        </li>
                        <li className="nav-parent">
                          <a>Second Level</a>
                          <ul className="nav nav-children">
                            <li className="nav-parent">
                              <a>Third Level</a>
                              <ul className="nav nav-children">
                                <li>
                                  <a>Third Level Link #1</a>
                                </li>
                                <li>
                                  <a>Third Level Link #2</a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a>Second Level Link #1</a>
                            </li>
                            <li>
                              <a>Second Level Link #2</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a
                        href="http://themeforest.net/item/JSOFT-responsive-html5-template/4106987?ref=JSOFT"
                        target="_blank"
                      >
                        <i className="fa fa-external-link" aria-hidden="true" />
                        <span>
                          Front-End <em className="not-included">(Not Included)</em>
                        </span>
                      </a>
                    </li>
                  </ul>
                </nav>
                <hr className="separator" />
                <div className="sidebar-widget widget-tasks">
                  <div className="widget-header">
                    <h6>Projects</h6>
                    <div className="widget-toggle">+</div>
                  </div>
                  <div className="widget-content">
                    <ul className="list-unstyled m-none">
                      <li>
                        <a href="#">JSOFT HTML5 Template</a>
                      </li>
                      <li>
                        <a href="#">Tucson Template</a>
                      </li>
                      <li>
                        <a href="#">JSOFT Admin</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <hr className="separator" />
                <div className="sidebar-widget widget-stats">
                  <div className="widget-header">
                    <h6>Company Stats</h6>
                    <div className="widget-toggle">+</div>
                  </div>
                  <div className="widget-content">
                    <ul>
                      <li>
                        <span className="stats-title">Stat 1</span>
                        <span className="stats-complete">85%</span>
                        <div className="progress">
                          <div
                            className="progress-bar progress-bar-primary progress-without-number"
                            role="progressbar"
                            aria-valuenow={85}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            style={{ width: "85%" }}
                          >
                            <span className="sr-only">85% Complete</span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <span className="stats-title">Stat 2</span>
                        <span className="stats-complete">70%</span>
                        <div className="progress">
                          <div
                            className="progress-bar progress-bar-primary progress-without-number"
                            role="progressbar"
                            aria-valuenow={70}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            style={{ width: "70%" }}
                          >
                            <span className="sr-only">70% Complete</span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <span className="stats-title">Stat 3</span>
                        <span className="stats-complete">2%</span>
                        <div className="progress">
                          <div
                            className="progress-bar progress-bar-primary progress-without-number"
                            role="progressbar"
                            aria-valuenow={2}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            style={{ width: "2%" }}
                          >
                            <span className="sr-only">2% Complete</span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </aside>
          <section role="main" className="content-body">
            <header className="page-header">
              <h2>Dashboard</h2>
              <div className="right-wrapper pull-right">
                <ol className="breadcrumbs">
                  <li>
                    <a href="index.html">
                      <i className="fa fa-home" />
                    </a>
                  </li>
                  <li>
                    <span>Dashboard</span>
                  </li>
                </ol>
                <a className="sidebar-right-toggle" data-open="sidebar-right">
                  <i className="fa fa-chevron-left" />
                </a>
              </div>
            </header>
            <div className="row">
              <div className="col-md-6">
                <section className="panel">
                  <header className="panel-heading">
                    <div className="panel-actions">
                      <a href="#" className="fa fa-caret-down" />
                      <a href="#" className="fa fa-times" />
                    </div>
                    <h2 className="panel-title">Best Seller</h2>
                    <p className="panel-subtitle">
                      Customize the graphs as much as you want, there are so many
                      options and features to display information using JSOFT Admin
                      Template.
                    </p>
                  </header>
                  <div className="panel-body">
                    <div className="chart chart-md" id="flotDashBasic" />
                  </div>
                </section>
              </div>
              <div className="col-md-6">
                <section className="panel">
                  <header className="panel-heading">
                    <div className="panel-actions">
                      <a href="#" className="fa fa-caret-down" />
                      <a href="#" className="fa fa-times" />
                    </div>
                    <h2 className="panel-title">Server Usage</h2>
                    <p className="panel-subtitle">
                      It's easy to create custom graphs on JSOFT Admin Template, there
                      are several graph types that you can use, such as lines, bars,
                      pie charts, etc...
                    </p>
                  </header>
                  <div className="panel-body">
                    <div className="chart chart-md" id="flotDashRealTime" />
                  </div>
                </section>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-12 col-xl-6">
                <section className="panel">
                  <div className="panel-body">
                    <div className="row">
                      <div className="col-lg-8">
                        <div
                          className="chart-data-selector"
                          id="salesSelectorWrapper"
                        >
                          <h2>
                            Sales:
                            <strong>
                              <select className="form-control" id="salesSelector">
                                <option value="JSOFT Admin">
                                  JSOFT Admin
                                </option>
                                <option value="JSOFT Drupal">JSOFT Drupal</option>
                                <option value="JSOFT Wordpress">
                                  JSOFT Wordpress
                                </option>
                              </select>
                            </strong>
                          </h2>
                          <div
                            id="salesSelectorItems"
                            className="chart-data-selector-items mt-sm"
                          >
                            <div
                              className="chart chart-sm chart-active"
                              data-sales-rel="JSOFT Admin"
                              id="flotDashSales1"
                            />
                            <div
                              className="chart chart-sm chart-hidden"
                              data-sales-rel="JSOFT Drupal"
                              id="flotDashSales2"
                            />
                            <div
                              className="chart chart-sm chart-hidden"
                              data-sales-rel="JSOFT Wordpress"
                              id="flotDashSales3"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 text-center">
                        <h2 className="panel-title mt-md">Sales Goal</h2>
                        <div className="liquid-meter-wrapper liquid-meter-sm mt-lg">
                          <div className="liquid-meter">
                            <meter min={0} max={100} value={35} id="meterSales" />
                          </div>
                          <div className="liquid-meter-selector" id="meterSalesSel">
                            <a href="#" data-val={35} className="active">
                              Monthly Goal
                            </a>
                            <a href="#" data-val={28}>
                              Annual Goal
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div className="col-md-6 col-lg-12 col-xl-6">
                <div className="row">
                  <div className="col-md-12 col-lg-6 col-xl-6">
                    <section className="panel panel-featured-left panel-featured-primary">
                      <div className="panel-body">
                        <div className="widget-summary">
                          <div className="widget-summary-col widget-summary-col-icon">
                            <div className="summary-icon bg-primary">
                              <i className="fa fa-life-ring" />
                            </div>
                          </div>
                          <div className="widget-summary-col">
                            <div className="summary">
                              <h4 className="title">Support Questions</h4>
                              <div className="info">
                                <strong className="amount">1281</strong>
                                <span className="text-primary">(14 unread)</span>
                              </div>
                            </div>
                            <div className="summary-footer">
                              <a className="text-muted text-uppercase">(view all)</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                  <div className="col-md-12 col-lg-6 col-xl-6">
                    <section className="panel panel-featured-left panel-featured-secondary">
                      <div className="panel-body">
                        <div className="widget-summary">
                          <div className="widget-summary-col widget-summary-col-icon">
                            <div className="summary-icon bg-secondary">
                              <i className="fa fa-usd" />
                            </div>
                          </div>
                          <div className="widget-summary-col">
                            <div className="summary">
                              <h4 className="title">Total Profit</h4>
                              <div className="info">
                                <strong className="amount">$ 14,890.30</strong>
                              </div>
                            </div>
                            <div className="summary-footer">
                              <a className="text-muted text-uppercase">(withdraw)</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                  <div className="col-md-12 col-lg-6 col-xl-6">
                    <section className="panel panel-featured-left panel-featured-tertiary">
                      <div className="panel-body">
                        <div className="widget-summary">
                          <div className="widget-summary-col widget-summary-col-icon">
                            <div className="summary-icon bg-tertiary">
                              <i className="fa fa-shopping-cart" />
                            </div>
                          </div>
                          <div className="widget-summary-col">
                            <div className="summary">
                              <h4 className="title">Today's Orders</h4>
                              <div className="info">
                                <strong className="amount">38</strong>
                              </div>
                            </div>
                            <div className="summary-footer">
                              <a className="text-muted text-uppercase">(statement)</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                  <div className="col-md-12 col-lg-6 col-xl-6">
                    <section className="panel panel-featured-left panel-featured-quartenary">
                      <div className="panel-body">
                        <div className="widget-summary">
                          <div className="widget-summary-col widget-summary-col-icon">
                            <div className="summary-icon bg-quartenary">
                              <i className="fa fa-user" />
                            </div>
                          </div>
                          <div className="widget-summary-col">
                            <div className="summary">
                              <h4 className="title">Today's Visitors</h4>
                              <div className="info">
                                <strong className="amount">3765</strong>
                              </div>
                            </div>
                            <div className="summary-footer">
                              <a className="text-muted text-uppercase">(report)</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-3 col-lg-6">
                <section className="panel panel-transparent">
                  <header className="panel-heading">
                    <div className="panel-actions">
                      <a href="#" className="fa fa-caret-down" />
                      <a href="#" className="fa fa-times" />
                    </div>
                    <h2 className="panel-title">My Profile</h2>
                  </header>
                  <div className="panel-body">
                    <section className="panel panel-group">
                      <header className="panel-heading bg-primary">
                        <div className="widget-profile-info">
                          <div className="profile-picture">
                            <img src="assets/images/!logged-user.jpg" />
                          </div>
                          <div className="profile-info">
                            <h4 className="name text-semibold">John Doe</h4>
                            <h5 className="role">Administrator</h5>
                            <div className="profile-footer">
                              <a href="#">(edit profile)</a>
                            </div>
                          </div>
                        </div>
                      </header>
                      <div id="accordion">
                        <div className="panel panel-accordion panel-accordion-first">
                          <div className="panel-heading">
                            <h4 className="panel-title">
                              <a
                                className="accordion-toggle"
                                data-toggle="collapse"
                                data-parent="#accordion"
                                href="#collapse1One"
                              >
                                <i className="fa fa-check" /> Tasks
                              </a>
                            </h4>
                          </div>
                          <div
                            id="collapse1One"
                            className="accordion-body collapse in"
                          >
                            <div className="panel-body">
                              <ul className="widget-todo-list">
                                <li>
                                  <div className="checkbox-custom checkbox-default">
                                    <input
                                      type="checkbox"
                                      defaultChecked=""
                                      id="todoListItem1"
                                      className="todo-check"
                                    />
                                    <label
                                      className="todo-label"
                                      htmlFor="todoListItem1"
                                    >
                                      <span>Lorem ipsum dolor sit amet</span>
                                    </label>
                                  </div>
                                  <div className="todo-actions">
                                    <a className="todo-remove" href="#">
                                      <i className="fa fa-times" />
                                    </a>
                                  </div>
                                </li>
                                <li>
                                  <div className="checkbox-custom checkbox-default">
                                    <input
                                      type="checkbox"
                                      id="todoListItem2"
                                      className="todo-check"
                                    />
                                    <label
                                      className="todo-label"
                                      htmlFor="todoListItem2"
                                    >
                                      <span>Lorem ipsum dolor sit amet</span>
                                    </label>
                                  </div>
                                  <div className="todo-actions">
                                    <a className="todo-remove" href="#">
                                      <i className="fa fa-times" />
                                    </a>
                                  </div>
                                </li>
                                <li>
                                  <div className="checkbox-custom checkbox-default">
                                    <input
                                      type="checkbox"
                                      id="todoListItem3"
                                      className="todo-check"
                                    />
                                    <label
                                      className="todo-label"
                                      htmlFor="todoListItem3"
                                    >
                                      <span>Lorem ipsum dolor sit amet</span>
                                    </label>
                                  </div>
                                  <div className="todo-actions">
                                    <a className="todo-remove" href="#">
                                      <i className="fa fa-times" />
                                    </a>
                                  </div>
                                </li>
                                <li>
                                  <div className="checkbox-custom checkbox-default">
                                    <input
                                      type="checkbox"
                                      id="todoListItem4"
                                      className="todo-check"
                                    />
                                    <label
                                      className="todo-label"
                                      htmlFor="todoListItem4"
                                    >
                                      <span>Lorem ipsum dolor sit amet</span>
                                    </label>
                                  </div>
                                  <div className="todo-actions">
                                    <a className="todo-remove" href="#">
                                      <i className="fa fa-times" />
                                    </a>
                                  </div>
                                </li>
                                <li>
                                  <div className="checkbox-custom checkbox-default">
                                    <input
                                      type="checkbox"
                                      id="todoListItem5"
                                      className="todo-check"
                                    />
                                    <label
                                      className="todo-label"
                                      htmlFor="todoListItem5"
                                    >
                                      <span>Lorem ipsum dolor sit amet</span>
                                    </label>
                                  </div>
                                  <div className="todo-actions">
                                    <a className="todo-remove" href="#">
                                      <i className="fa fa-times" />
                                    </a>
                                  </div>
                                </li>
                                <li>
                                  <div className="checkbox-custom checkbox-default">
                                    <input
                                      type="checkbox"
                                      id="todoListItem6"
                                      className="todo-check"
                                    />
                                    <label
                                      className="todo-label"
                                      htmlFor="todoListItem6"
                                    >
                                      <span>Lorem ipsum dolor sit amet</span>
                                    </label>
                                  </div>
                                  <div className="todo-actions">
                                    <a className="todo-remove" href="#">
                                      <i className="fa fa-times" />
                                    </a>
                                  </div>
                                </li>
                              </ul>
                              <hr className="solid mt-sm mb-lg" />
                              <form
                                method="get"
                                className="form-horizontal form-bordered"
                              >
                                <div className="form-group">
                                  <div className="col-sm-12">
                                    <div className="input-group mb-md">
                                      <input type="text" className="form-control" />
                                      <div className="input-group-btn">
                                        <button
                                          type="button"
                                          className="btn btn-primary"
                                          tabIndex={-1}
                                        >
                                          Add
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                        <div className="panel panel-accordion">
                          <div className="panel-heading">
                            <h4 className="panel-title">
                              <a
                                className="accordion-toggle"
                                data-toggle="collapse"
                                data-parent="#accordion"
                                href="#collapse1Two"
                              >
                                <i className="fa fa-comment" /> Messages
                              </a>
                            </h4>
                          </div>
                          <div id="collapse1Two" className="accordion-body collapse">
                            <div className="panel-body">
                              <ul className="simple-user-list mb-xlg">
                                <li>
                                  <figure className="image rounded">
                                    <img
                                      src="assets/images/!sample-user.jpg"
                                      alt="Joseph Doe Junior"
                                      className="img-circle"
                                    />
                                  </figure>
                                  <span className="title">Joseph Doe Junior</span>
                                  <span className="message">
                                    Lorem ipsum dolor sit.
                                  </span>
                                </li>
                                <li>
                                  <figure className="image rounded">
                                    <img
                                      src="assets/images/!sample-user.jpg"
                                      alt="Joseph Junior"
                                      className="img-circle"
                                    />
                                  </figure>
                                  <span className="title">Joseph Junior</span>
                                  <span className="message">
                                    Lorem ipsum dolor sit.
                                  </span>
                                </li>
                                <li>
                                  <figure className="image rounded">
                                    <img
                                      src="assets/images/!sample-user.jpg"
                                      alt="Joe Junior"
                                      className="img-circle"
                                    />
                                  </figure>
                                  <span className="title">Joe Junior</span>
                                  <span className="message">
                                    Lorem ipsum dolor sit.
                                  </span>
                                </li>
                                <li>
                                  <figure className="image rounded">
                                    <img
                                      src="assets/images/!sample-user.jpg"
                                      alt="Joseph Doe Junior"
                                      className="img-circle"
                                    />
                                  </figure>
                                  <span className="title">Joseph Doe Junior</span>
                                  <span className="message">
                                    Lorem ipsum dolor sit.
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </section>
              </div>
              <div className="col-xl-3 col-lg-6">
                <section className="panel panel-transparent">
                  <header className="panel-heading">
                    <div className="panel-actions">
                      <a href="#" className="fa fa-caret-down" />
                      <a href="#" className="fa fa-times" />
                    </div>
                    <h2 className="panel-title">My Stats</h2>
                  </header>
                  <div className="panel-body">
                    <section className="panel">
                      <div className="panel-body">
                        <div
                          className="small-chart pull-right"
                          id="sparklineBarDash"
                        />
                        <div className="h4 text-bold mb-none">488</div>
                        <p className="text-xs text-muted mb-none">
                          Average Profile Visits
                        </p>
                      </div>
                    </section>
                    <section className="panel">
                      <div className="panel-body">
                        <div className="circular-bar circular-bar-xs m-none mt-xs mr-md pull-right">
                          <div
                            className="circular-bar-chart"
                            data-percent={45}
                            data-plugin-options='{ "barColor": "#2baab1", "delay": 300, "size": 50, "lineWidth": 4 }'
                          >
                            <strong>Average</strong>
                            <label>
                              <span className="percent">45</span>%
                            </label>
                          </div>
                        </div>
                        <div className="h4 text-bold mb-none">12</div>
                        <p className="text-xs text-muted mb-none">Working Projects</p>
                      </div>
                    </section>
                    <section className="panel">
                      <div className="panel-body">
                        <div
                          className="small-chart pull-right"
                          id="sparklineLineDash"
                        />
                        <div className="h4 text-bold mb-none">89</div>
                        <p className="text-xs text-muted mb-none">Pending Tasks</p>
                      </div>
                    </section>
                  </div>
                </section>
                <section className="panel">
                  <header className="panel-heading">
                    <div className="panel-actions">
                      <a href="#" className="fa fa-caret-down" />
                      <a href="#" className="fa fa-times" />
                    </div>
                    <h2 className="panel-title">
                      <span className="label label-primary label-sm text-normal va-middle mr-sm">
                        198
                      </span>
                      <span className="va-middle">Friends</span>
                    </h2>
                  </header>
                  <div className="panel-body">
                    <div className="content">
                      <ul className="simple-user-list">
                        <li>
                          <figure className="image rounded">
                            <img
                              src="assets/images/!sample-user.jpg"
                              alt="Joseph Doe Junior"
                              className="img-circle"
                            />
                          </figure>
                          <span className="title">Joseph Doe Junior</span>
                          <span className="message truncate">
                            Lorem ipsum dolor sit.
                          </span>
                        </li>
                        <li>
                          <figure className="image rounded">
                            <img
                              src="assets/images/!sample-user.jpg"
                              alt="Joseph Junior"
                              className="img-circle"
                            />
                          </figure>
                          <span className="title">Joseph Junior</span>
                          <span className="message truncate">
                            Lorem ipsum dolor sit.
                          </span>
                        </li>
                        <li>
                          <figure className="image rounded">
                            <img
                              src="assets/images/!sample-user.jpg"
                              alt="Joe Junior"
                              className="img-circle"
                            />
                          </figure>
                          <span className="title">Joe Junior</span>
                          <span className="message truncate">
                            Lorem ipsum dolor sit.
                          </span>
                        </li>
                      </ul>
                      <hr className="dotted short" />
                      <div className="text-right">
                        <a className="text-uppercase text-muted" href="#">
                          (View All)
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="panel-footer">
                    <div className="input-group input-search">
                      <input
                        type="text"
                        className="form-control"
                        name="q"
                        id="q"
                        placeholder="Search..."
                      />
                      <span className="input-group-btn">
                        <button className="btn btn-default" type="submit">
                          <i className="fa fa-search" />
                        </button>
                      </span>
                    </div>
                  </div>
                </section>
              </div>
              <div className="col-xl-6 col-lg-12">
                <section className="panel">
                  <header className="panel-heading panel-heading-transparent">
                    <div className="panel-actions">
                      <a href="#" className="fa fa-caret-down" />
                      <a href="#" className="fa fa-times" />
                    </div>
                    <h2 className="panel-title">Company Activity</h2>
                  </header>
                  <div className="panel-body">
                    <div className="timeline timeline-simple mt-xlg mb-md">
                      <div className="tm-body">
                        <div className="tm-title">
                          <h3 className="h5 text-uppercase">November 2013</h3>
                        </div>
                        <ol className="tm-items">
                          <li>
                            <div className="tm-box">
                              <p className="text-muted mb-none">7 months ago.</p>
                              <p>
                                It's awesome when we find a good solution for our
                                projects, JSOFT Admin is{" "}
                                <span className="text-primary">#awesome</span>
                              </p>
                            </div>
                          </li>
                          <li>
                            <div className="tm-box">
                              <p className="text-muted mb-none">7 months ago.</p>
                              <p>Checkout! How cool is that!</p>
                              <div className="thumbnail-gallery">
                                <a
                                  className="img-thumbnail lightbox"
                                  href="assets/images/projects/project-4.jpg"
                                  data-plugin-options='{ "type":"image" }'
                                >
                                  <img
                                    className="img-responsive"
                                    width={215}
                                    src="assets/images/projects/project-4.jpg"
                                  />
                                  <span className="zoom">
                                    <i className="fa fa-search" />
                                  </span>
                                </a>
                              </div>
                            </div>
                          </li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <section className="panel panel-transparent">
                  <header className="panel-heading">
                    <div className="panel-actions">
                      <a href="#" className="fa fa-caret-down" />
                      <a href="#" className="fa fa-times" />
                    </div>
                    <h2 className="panel-title">Global Stats</h2>
                  </header>
                  <div className="panel-body">
                    <div id="vectorMapWorld" style={{ height: 350, width: "100%" }} />
                  </div>
                </section>
              </div>
              <div className="col-lg-6 col-md-12">
                <section className="panel">
                  <header className="panel-heading panel-heading-transparent">
                    <div className="panel-actions">
                      <a href="#" className="fa fa-caret-down" />
                      <a href="#" className="fa fa-times" />
                    </div>
                    <h2 className="panel-title">Projects Stats</h2>
                  </header>
                  <div className="panel-body">
                    <div className="table-responsive">
                      <table className="table table-striped mb-none">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Project</th>
                            <th>Status</th>
                            <th>Progress</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>JSOFT - Responsive HTML5 Template</td>
                            <td>
                              <span className="label label-success">Success</span>
                            </td>
                            <td>
                              <div className="progress progress-sm progress-half-rounded m-none mt-xs light">
                                <div
                                  className="progress-bar progress-bar-primary"
                                  role="progressbar"
                                  aria-valuenow={60}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                  style={{ width: "100%" }}
                                >
                                  100%
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>JSOFT - Responsive Drupal 7 Theme</td>
                            <td>
                              <span className="label label-success">Success</span>
                            </td>
                            <td>
                              <div className="progress progress-sm progress-half-rounded m-none mt-xs light">
                                <div
                                  className="progress-bar progress-bar-primary"
                                  role="progressbar"
                                  aria-valuenow={60}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                  style={{ width: "100%" }}
                                >
                                  100%
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Tucson - Responsive HTML5 Template</td>
                            <td>
                              <span className="label label-warning">Warning</span>
                            </td>
                            <td>
                              <div className="progress progress-sm progress-half-rounded m-none mt-xs light">
                                <div
                                  className="progress-bar progress-bar-primary"
                                  role="progressbar"
                                  aria-valuenow={60}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                  style={{ width: "60%" }}
                                >
                                  60%
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>Tucson - Responsive Business WordPress Theme</td>
                            <td>
                              <span className="label label-success">Success</span>
                            </td>
                            <td>
                              <div className="progress progress-sm progress-half-rounded m-none mt-xs light">
                                <div
                                  className="progress-bar progress-bar-primary"
                                  role="progressbar"
                                  aria-valuenow={60}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                  style={{ width: "90%" }}
                                >
                                  90%
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>JSOFT - Responsive Admin HTML5 Template</td>
                            <td>
                              <span className="label label-warning">Warning</span>
                            </td>
                            <td>
                              <div className="progress progress-sm progress-half-rounded m-none mt-xs light">
                                <div
                                  className="progress-bar progress-bar-primary"
                                  role="progressbar"
                                  aria-valuenow={60}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                  style={{ width: "45%" }}
                                >
                                  45%
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>6</td>
                            <td>JSOFT - Responsive HTML5 Template</td>
                            <td>
                              <span className="label label-danger">Danger</span>
                            </td>
                            <td>
                              <div className="progress progress-sm progress-half-rounded m-none mt-xs light">
                                <div
                                  className="progress-bar progress-bar-primary"
                                  role="progressbar"
                                  aria-valuenow={60}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                  style={{ width: "40%" }}
                                >
                                  40%
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>7</td>
                            <td>JSOFT - Responsive Drupal 7 Theme</td>
                            <td>
                              <span className="label label-success">Success</span>
                            </td>
                            <td>
                              <div className="progress progress-sm progress-half-rounded mt-xs light">
                                <div
                                  className="progress-bar progress-bar-primary"
                                  role="progressbar"
                                  aria-valuenow={60}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                  style={{ width: "95%" }}
                                >
                                  95%
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </section>
        </div>
        <aside id="sidebar-right" className="sidebar-right">
          <div className="nano">
            <div className="nano-content">
              <a href="#" className="mobile-close visible-xs">
                Collapse <i className="fa fa-chevron-right" />
              </a>
              <div className="sidebar-right-wrapper">
                <div className="sidebar-widget widget-calendar">
                  <h6>Upcoming Tasks</h6>
                  <div data-plugin-datepicker="" data-plugin-skin="dark" />
                  <ul>
                    <li>
                      <time dateTime="2014-04-19T00:00+00:00">04/19/2014</time>
                      <span>Company Meeting</span>
                    </li>
                  </ul>
                </div>
                <div className="sidebar-widget widget-friends">
                  <h6>Friends</h6>
                  <ul>
                    <li className="status-online">
                      <figure className="profile-picture">
                        <img
                          src="assets/images/!sample-user.jpg"
                          alt="Joseph Doe"
                          className="img-circle"
                        />
                      </figure>
                      <div className="profile-info">
                        <span className="name">Joseph Doe Junior</span>
                        <span className="title">Hey, how are you?</span>
                      </div>
                    </li>
                    <li className="status-online">
                      <figure className="profile-picture">
                        <img
                          src="assets/images/!sample-user.jpg"
                          alt="Joseph Doe"
                          className="img-circle"
                        />
                      </figure>
                      <div className="profile-info">
                        <span className="name">Joseph Doe Junior</span>
                        <span className="title">Hey, how are you?</span>
                      </div>
                    </li>
                    <li className="status-offline">
                      <figure className="profile-picture">
                        <img
                          src="assets/images/!sample-user.jpg"
                          alt="Joseph Doe"
                          className="img-circle"
                        />
                      </figure>
                      <div className="profile-info">
                        <span className="name">Joseph Doe Junior</span>
                        <span className="title">Hey, how are you?</span>
                      </div>
                    </li>
                    <li className="status-offline">
                      <figure className="profile-picture">
                        <img
                          src="assets/images/!sample-user.jpg"
                          alt="Joseph Doe"
                          className="img-circle"
                        />
                      </figure>
                      <div className="profile-info">
                        <span className="name">Joseph Doe Junior</span>
                        <span className="title">Hey, how are you?</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </>
  }

}


window.flotDashBasicData = [{
  data: [
    [0, 170],
    [1, 169],
    [2, 173],
    [3, 188],
    [4, 147],
    [5, 113],
    [6, 128],
    [7, 169],
    [8, 173],
    [9, 128],
    [10, 128]
  ],
  label: "Series 1",
  color: "#0088cc"
}, {
  data: [
    [0, 115],
    [1, 124],
    [2, 114],
    [3, 121],
    [4, 115],
    [5, 83],
    [6, 102],
    [7, 148],
    [8, 147],
    [9, 103],
    [10, 113]
  ],
  label: "Series 2",
  color: "#2baab1"
}, {
  data: [
    [0, 70],
    [1, 69],
    [2, 73],
    [3, 88],
    [4, 47],
    [5, 13],
    [6, 28],
    [7, 69],
    [8, 73],
    [9, 28],
    [10, 28]
  ],
  label: "Series 3",
  color: "#734ba9"
}];

window.flotDashSales1Data = [{
  data: [
    ["Jan", 140],
    ["Feb", 240],
    ["Mar", 190],
    ["Apr", 140],
    ["May", 180],
    ["Jun", 320],
    ["Jul", 270],
    ["Aug", 180]
  ],
  color: "#0088cc"
}];

window.flotDashSales2Data = [{
  data: [
    ["Jan", 240],
    ["Feb", 240],
    ["Mar", 290],
    ["Apr", 540],
    ["May", 480],
    ["Jun", 220],
    ["Jul", 170],
    ["Aug", 190]
  ],
  color: "#2baab1"
}];

window.flotDashSales3Data = [{
  data: [
    ["Jan", 840],
    ["Feb", 740],
    ["Mar", 690],
    ["Apr", 940],
    ["May", 1180],
    ["Jun", 820],
    ["Jul", 570],
    ["Aug", 780]
  ],
  color: "#734ba9"
}];

window.sparklineBarDashData = [5, 6, 7, 2, 0, 4 , 2, 4, 2, 0, 4 , 2, 4, 2, 0, 4];

window.sparklineLineDashData = [15, 16, 17, 19, 10, 15, 13, 12, 12, 14, 16, 17];
