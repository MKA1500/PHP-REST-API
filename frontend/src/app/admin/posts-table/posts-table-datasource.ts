import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { PostsTableItem } from '../../models/postsTableItem.model';


const EXAMPLE_DATA: PostsTableItem[] = [
  {
    id: "1",
    title: "Excepteur sint occaecat",
    lead: " Excepteur adipiscing elit",
    image: "Swietoslawska.jpg",
    author: "John Doe",
    category_id: "1",
    category_name: "Technology"
  },
  {
    id: "2",
    title: "Technology Post Two",
    lead: "Adipiscing elit Adipiscing elit Adipiscing elit",
    image: "Swietoslawska.jpg",
    author: "Sam Smith",
    category_id: "1",
    category_name: "Technology"
  },
  {
    id: "3",
    title: "Post 3",
    lead: "3 Adipiscing elit",
    image: "Swietoslawska.jpg",
    author: "Swietoslw Smith",
    category_id: "1",
    category_name: "Tech"
  },
];

/**
 * Data source for the PostsTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class PostsTableDataSource extends DataSource<PostsTableItem> {
  data: PostsTableItem[] = EXAMPLE_DATA;

  constructor(private paginator: MatPaginator, private sort: MatSort) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<PostsTableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginator's length
    this.paginator.length = this.data.length;
    console.log(this.data.length);

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: PostsTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: PostsTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'id': return compare(+a.id, +b.id, isAsc);
        case 'title': return compare(a.title, b.title, isAsc);
        case 'lead': return compare(a.lead, b.lead, isAsc);
        case 'image': return compare(a.image, b.image, isAsc);
        case 'author': return compare(a.author, b.author, isAsc);
        case 'category_id': return compare(a.category_id, b.category_id, isAsc);
        case 'category_name': return compare(+a.category_name, +b.category_name, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
