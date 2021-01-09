import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import moment from 'moment';
import renderHTML from 'react-render-html';
import MainLayout from '../../components/MainLayout';
import { useState } from 'react';
import { singleBlog } from '../../actions/BlogActions';
import { API, APP_NAME, FB_APP_ID, DOMAIN } from '../../config';

const SingleBlog = ({blog, query}) => {
    const head = () => (
        <Head>
            <title>{blog.title} | {APP_NAME}</title>
            <meta
                name="description"
                content={blog.metaDesc}
            />
            <link rel="canonical" href={`${DOMAIN}/blog/${query.slug}`} />
            <meta property="og:title" content={`${blog.title} | ${APP_NAME}`} />
            <meta
                property="og:description"
                content={blog.metaDesc}
            />
            <meta property="og:type" content="webiste" />
            <meta property="og:url" content={`${DOMAIN}/blog/${query.slug}`} />
            <meta property="og:site_name" content={`${APP_NAME}`} />

            <meta property="og:image" content={`${API}/blog/photo/${blog.slug}`} />
            <meta property="og:image:secure_url" content={`${API}/blog/photo/${blog.slug}`} />
            <meta property="og:image:type" content="image/jpg" />
            <meta property="fb:app_id" content={`${FB_APP_ID}`} />
        </Head>
    );

    const showBlogCategories = blog =>
        blog.categories.map((c, i) => (
            <Link key={i} href={`/categories/${c.slug}`}>
                <a className="btn btn-primary mr-1 ml-1 mt-3">{c.name}</a>
            </Link>
        ));

    const showBlogTags = blog =>
        blog.tags.map((t, i) => (
            <Link key={i} href={`/tags/${t.slug}`}>
                <a className="btn btn-outline-primary mr-1 ml-1 mt-3">{t.name}</a>
            </Link>
        ));

      return(
            <React.Fragment>
                  {head()}
                  <MainLayout>
                        <article>
                              <div className="container-fluid">
                                    <section>
                                    <div className="row" style={{marginTop: '-30px'}}>
                                    <img src={`${API}/blog/photo/${blog.slug}`} alt={blog.title}
                                          className="img img-fluid featured-image"/>
                                    </div>
                                    </section>
                                    <section>
                                          <h1 className="display-2 pb-3 pt-3 tex">{blog.title}</h1>
                                          <p className="lead">
                                            Written by{' '}
                                            <Link href={`/profile/${blog.postedBy.username}`}>
                                                <a>{blog.postedBy.username}</a>
                                            </Link>{' '}
                                            | Published {moment(blog.updatedAt).fromNow()}
                                          </p>
                                    <div className="paddingBottom-3">
                                        {showBlogCategories(blog)}
                                        {showBlogTags(blog)}
                                        <br />
                                        <br />
                                    </div>
                                    </section>
                              </div>
                              <div className="container">
                                    <section>
                                          <div className="col-md-12 lead">
                                                {renderHTML(blog.body)}
                                          </div>
                                    </section>
                              </div>
                              <div className="container pb-5">
                                    <h4>Related Blogs</h4>
                                    <hr/>
                                    <p>show related blogs</p>
                              </div>
                               <div className="container pb-5">
                                    <p>show comments</p>
                              </div>
                        </article>

                  </MainLayout>
            </React.Fragment>
            );
};

SingleBlog.getInitialProps = ({query}) => {
      return singleBlog(query.slug)
            .then(data => {
                  if(data.error){
                        console.log(data.error);
                  } else {
                        return {blog: data, query};
                  }
            });
};

export default SingleBlog;
