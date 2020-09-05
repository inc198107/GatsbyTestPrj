import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Sidebar from '../components/sidebar';
import ImagesBlock from '../components/images-block'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <Sidebar/>
    <ImagesBlock/>
  </Layout>
);

export default IndexPage;
