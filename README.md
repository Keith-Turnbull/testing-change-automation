# Change Automation Trigger action

This Action calls the Progressive Change Automation System to perform some automation tasks.

## Inputs

### Step to us
**Required**
Valid Values
- Build
- QASignOff
- Release


### `who-to-greet`

**Required** The name of the person to greet. Default `"World"`.

## Outputs

### `time`

The time we greeted you.

## Example usage

```yaml
uses: actions/hello-world-javascript-action@v1.1
with:
  who-to-greet: 'Mona the Octocat'
```
