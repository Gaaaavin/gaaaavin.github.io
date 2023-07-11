---
# Leave the homepage title empty to use the site title
title:
date: 2022-10-24
type: landing

sections:
  - block: about.avatar
    id: about
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin

  - block: collection
    id: publications
    content:
      title: Publications
      text: |-
        {{% callout note %}}
        Quickly discover relevant content by [filtering publications](./publication/).
        {{% /callout %}}
      filters:
        folders:
          - publication
    design:
      columns: '1'
      view: community/publication

  - block: collection
    id: projects
    content:
      title: Selected projects
      filters:
        folders:
          - project
    design:
      # Choose how many columns the section has. Valid values: '1' or '2'.
      columns: '2'
      view: community/project

  - block: markdown
    id: awards
    content:
      title: Honors & Awards
      text: "* 2023, University Honors Scholar, NYU
      
      * 2022, UGSRP Research Fund, NYU Tandon

      * 2023, 2022, 2020, Dean's List for Academic Year, NYU Shanghai


      * 2022, Phase 1 and 2 Winner, FRST Challenge


      * 2020, Best Research Project, Undergraduate Research Symposium, NYU Shanghai


      * 2020, Dean's Undergraduate Research Fund, NYU Shanghai"
    design:
      # Choose how many columns the section has. Valid values: '1' or '2'.
      columns: '2'

  - block: markdown
    id: more
    content:
      title: More
      text: "
      ## Friends

      Check out these amazing friends of mine!

      * [Harry Lee | 李昊蕤](https://harrilee.site/)

      * [Hammond Liu | 刘浩铭](https://hmdliu.site/)

      * [Zihan Shao | 邵子涵](https://eddyshao.github.io/)

      * [Bale Chen | 陈丙森](https://balechen.github.io/)
      "
    design:
      # Choose how many columns the section has. Valid values: '1' or '2'.
      columns: '2'
  
  - block: markdown
    id: visitor
    content:
      title: Visitor Footprint
      text: '<script type="text/javascript" src="//rf.revolvermaps.com/0/0/7.js?i=5qsmn9lu4sj&amp;m=2&amp;c=ff0000&amp;cr1=ffffff&amp;sx=0" async="async"></script>'
---