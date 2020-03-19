import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { ApiResponseModel } from "src/shared/models/api-response.model";
import { ApiRequestModel } from "src/shared/models/api-request.model";

@Injectable({
  providedIn: "root"
})
export class WordFinderService {
  isLoading: boolean;

  constructor(private http: HttpClient) {}

  searchWord(model: ApiRequestModel) {    
    return this.http.post<ApiResponseModel>(`${environment.apiUrl}`,model);
  }
}
