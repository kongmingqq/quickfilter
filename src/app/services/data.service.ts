import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of as ObservableOf} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  private mockData = [
    "New versions of Cloud Composer images: composer-1.11.2-airflow-1.10.3, composer-1.11.2-airflow-1.10.6, and composer-1.11.2-airflow-1.10.9. The default is composer-1.11.2-airflow-1.10.6. Upgrade your Cloud SDK to use features in this release.",
    "Airflow 1.10.6 and 1.10.9: You can now specify a location argument when creating a BigQueryCheckOperator to use it in a different region from the Composer environment.",
    "Fixed GKE setting incompatibilities that broke environment creation for Composer versions between 1.7.2 and 1.8.3.",
    "When DAG serialization is on, plugins and DAGs are no longer synced when the Airflow web server starts up. This fixes web server failures when plugins use custom PyPI packages.",
    "Fixed intermittent failures when triggering a DAG from the Airflow Web UI with DAG serialization turned on.",
    "Fixed update operations (installing Python dependencies and upgrading environments) for domain-scoped projects.",
    "Fixed a broken link to the Airflow documentation in Airflow 1.10.9.",
    "Beta launch of regionalization and data residency.",
    "Added support for BigtableTable",
    "Fix a bug where a CRD would be marked as uninstalling on a dryrun delete",
    "You can now update multiple instance properties using a single request from the command-line tool or the Compute Engine API to update multiple instance properties. For more information, see Updating instance properties.",
    "TensorFlow Enterprise 2.3 images, including images that support CUDA 11.0, are now available."
  ];

  fetchList(): Observable<string[]> {
    // return this.http.get<string[]>('/api/list');
    return ObservableOf(this.mockData);
  }
}
