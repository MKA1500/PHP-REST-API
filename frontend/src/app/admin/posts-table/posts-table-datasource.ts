import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// import { DataService } from '../../shared/data.service';
// import { PostsForTableUnit } from '../../shared/postsForTableUnit.model';
// import { PostsImporter } from '../../shared/postsImporter.model';

// TODO: Replace this with your own data model type
export interface PostsTableItem {
  name: string;
  id: number;
  amount: number;
}
// let postsForTableUnitData: PostsForTableUnit;
// let dataServiceData: DataService;
// let postsImporter = new PostsImporter(postsForTableUnitData, dataServiceData);
// let POSTS_IMPORTED = postsImporter.importPosts();
//
// console.log('POSTS_IMPORTED', POSTS_IMPORTED);

const EXAMPLE_DATA: PostsTableItem[] = [
  {id: 1, name: 'Hydrogen', amount: 323 },
  {id: 2, name: 'Helium', amount: 99 },
  {id: 3, name: 'Lithium', amount: 223 },
  {id: 4, name: 'Beryllium', amount: 123 },
  {id: 5, name: 'Boron', amount: 666 },
  {id: 6, name: 'Carbon', amount: 123 },
  {id: 7, name: 'Nitrogen', amount: 123 },
  {id: 8, name: 'Oxygen', amount: 567 },
  {id: 9, name: 'Fluorine', amount: 123 },
  {id: 10, name: 'Neon', amount: 123 },
  {id: 11, name: 'Nitrogen 2', amount: 423 },
  {id: 12, name: 'Oxygen 2', amount: 167 },
  {id: 13, name: 'Fluorine 2', amount: 23 },
  {id: 14, name: 'Neon 2', amount: 223 },
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
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        case 'amount': return compare(+a.amount, +b.amount, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
