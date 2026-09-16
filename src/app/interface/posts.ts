export interface Posts {
        id: number,
        slug:string,
        title: string,
        excerpt:string,
        content:string,
        category: string,

        author: authorPost,
        image:string,
        date: string,
        readTime: string,
        featured: boolean,
        tags: string[]
}

export interface authorPost{
        name:string,
        avatar: string,
        role:string,
}

export interface Categories{
    name: string,
    count: number,
    color: string, 
    icon: string;
}

export interface SiteInfo{
    name: string,
    tagline:string,
    description:string,
    email: string,
    social: {
      twitter: string,
      github: string,
      linkedin:string,
      youtube:string,
  }
};