import React from "react";
import PropTypes from "prop-types";
import g from "glamorous";

// Utilities
import kebabCase from "lodash/kebabCase";

// Components
import Link from "gatsby-link";
import ContentListItem from '../components/contentListItem';

const TagList = g.ul({
  listStyleType: 'none',
});

class TagListItem extends React.Component {
  render() {
    const tag = this.props.tag;
    return (
      <g.Li
        key={tag.fieldValue}
        fontWeight='700'
        fontFamily='Open Sans, sans-serif'
      >
        <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
          {tag.fieldValue} ({tag.totalCount})
        </Link>
      </g.Li>
    )
  }
}

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
  },
}) => {
  const sortedGroup = group.sort(function (a,b) {return a.fieldValue.localeCompare(b.fieldValue);});
  return (
    <div>
      <h2>Tags</h2>
      <TagList>
        {sortedGroup.map(tag => (
          <TagListItem tag={tag} key={tag.fieldValue} />
        ))}
      </TagList>
    </div>
  );
};

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
  }),
};

export default TagsPage;

export const pageQuery = graphql`
  query TagsQuery {
    allMarkdownRemark(
      limit: 2000
      filter: {
        frontmatter: {
          published: { eq: true }
        }
      }
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
