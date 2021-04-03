class ParticleSetGroup {
    ArrayList<ParticleSet> group;
    ParticleSetGroup() { 
        this.group = new ArrayList<ParticleSet>();
    }
    void add(ParticleSet pset) { 
        this.group.add(pset);
    }
};