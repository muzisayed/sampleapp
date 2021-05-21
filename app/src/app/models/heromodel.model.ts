import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class heromodel {
  @JsonProperty('name', String, true)
  public name: string = undefined;

  @JsonProperty('description', String, true)
  public description: string = undefined;

  @JsonProperty('skills', String, true)
  public skills: string = undefined;

}