export class PostsImporter {
  response: any;

  constructor(public postForTableUnit, private data) { }

  importPosts() {
    let obs = this.data.getPosts();
    obs.subscribe((res) => {
      this.response = res;
      console.log(this.response);
    });
  }
}
