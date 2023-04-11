const Teams = ({selectedTeam, handleTeamSelectionChange}) => {
  return (
    <div class="row justify-content-center mt-3 mb-3">
      <div class="col-6">
        <select className="form-select form-select-lg" value={selectedTeam} onChange={handleTeamSelectionChange}>
          <option value="Team A">Team A</option>
          <option value="Team B">Team B</option>
          <option value="Team C">Team C</option>
          <option value="Team D">Team D</option>
        </select>
      </div>
    </div>
  )
}

export default Teams